import { ReactNode } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

type LayoutProps = {
  children: ReactNode
  className?: string | undefined
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = 'items-center justify-center px-8 pt-6 pb-10 md:px-16',
}) => {
  return (
    <div className="flex flex-col h-screen scroll-smooth">
      <Header />

      <main className="grow">
        <div className={className}>{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
