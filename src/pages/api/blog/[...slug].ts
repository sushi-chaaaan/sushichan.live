import type { APIRoute } from "astro"

import { getAllPosts, getAllPreviewPosts } from "@/features/blog/utils/post"
import { type CollectionEntry, getEntry } from "astro:content"

export async function getStaticPaths() {
  const blogEntries = await getAllPosts()
  const previewEntries = await getAllPreviewPosts()
  const entries = Array.from(new Set([...blogEntries, ...previewEntries]))
  return entries.map(({ slug }) => ({
    params: { slug },
  }))
}

export const GET: APIRoute<
  Record<string, never>,
  { slug: CollectionEntry<"posts">["slug"] }
> = async ({ params: { slug } }) => {
  const post = await getEntry("posts", slug)
  const title = post.data.title
  const length = post.body.length

  return new Response(JSON.stringify(`${title}の現在の文字数は${length}です`), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  })
}
