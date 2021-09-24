export class PostsModel {
  constructor(postData) {
    this.body = postData.body
    this.createdAt = postData.createdAt
    this.creator = postData.creator
    this.creatorId = postData.creatorId || {}
    this.id = postData.id
    this.imgUrl = postData.imgUrl
    this.likeIds = postData.likeIds
    this.likes = postData.likes
    this.updatedAt = postData.updatedAt
  }
}
// !RES DATA
/* newer: null

body: "🤩 #GOALS"
createdAt: "2021-09-24T05:06:21.036Z"
creator: {subs: Array(1), picture: 'https://s.gravatar.com/avatar/33fc107cfdbe88340529…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png', bio: '', coverImg: 'https://images.unsplash.com/photo-1586829135343-13…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', github: '', …}
creatorId: "614cf6fc752a084339fb890c"
id: "614d5ccd5b406700166d4ea6"
imgUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
likeIds: []
likes: []
updatedAt: "2021-09-24T05:06:21.036Z"
__v: 0
_id: "614d5ccd5b406700166d4ea6" */
