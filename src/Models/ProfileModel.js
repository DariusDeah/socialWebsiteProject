export class ProfileModel {
  constructor(profileData) {
    this.bio = profileData.bio
    this.class = profileData.class
    this.coverImg = profileData.coverImg
    this.createdAt = profileData.createdAt
    this.email = profileData.email
    this.github = profileData.github
    this.graduated = profileData.graduated
    this.id = profileData.id
    this.linkedin = profileData.linkedin
    this.name = profileData.name
    this.picture = profileData.picture
    this.subs = profileData.subs
  }
}

/** data:
bio: "Hello, my name is Derek. I like to hike."
class: "Fall 21"
coverImg: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
createdAt: "2021-09-23T20:16:55.962Z"
email: "derekshain@thisisatest.com"
github: "https://github.com/DerekShain"
graduated: false
id: "614ce0b13f99e2350e89456e"
linkedin: "www.linkedin.com/in/derekshain"
name: "Derek"
picture: "https://i.ytimg.com/vi/cthLUnEqT5k/maxresdefault.jpg"
resume: ""
subs: ['auth0|614ce0b008cddb006a8ecce5']
updatedAt: "2021-09-25T07:44:09.789Z"
__v: 0
_id: "614ce0b13f99e2350e89456e" */
