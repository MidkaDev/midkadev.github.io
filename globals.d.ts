declare module '*.mdx' {
    import { ReactNode } from 'react'
  
    export const frontMatter: {
      title: string
      snippet: string
      createdAt: number
      updatedAt: number
      image: string
      __resourcePath: string
      // type additional properties according to
      // the front-matter you define
    }
  
    const component: ReactNode
    export default ReactNode
  }