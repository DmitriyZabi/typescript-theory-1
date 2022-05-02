enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum Socialmedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = Socialmedia.INSTAGRAM
console.log(social)
