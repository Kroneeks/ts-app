import { Article } from "@/entities/Article"

const defaultArticle = {
    title: "TESTING ARTICLE",
    subtitle: "Что нового в Kotlin за 2022 год?",
    img: "https://developer.okta.com/assets-jekyll/blog/tutorial-kotlin-beginners-guide/kotlin-logo-social-21c8518b19eb96d96f35e0057bb92b7e1281a24820e0fa09e39c42f184bd7faa.png",
    views: 12,
    createdAt: "05.01.2022",
    userId: "1",
    type: [
    "IT"
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {  
  return cy.request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: {authorization: 'asasf'},
      body: article ?? defaultArticle
    }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
      method: 'DELETE',
      url: `http://localhost:8000/articles/${articleId}`,
      headers: {authorization: 'asasf'},
    })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}