import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = (article) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticleCell id={article.id} />
    </>
  )
}

export default ArticlePage
