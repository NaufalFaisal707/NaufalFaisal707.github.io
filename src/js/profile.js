let profile = {}

// personal
profile.ownerName = 'Naufal Faisal'
profile.ownBirthYear = 2005

// Skill
module.exports = {
    title: `${profile.ownerName} Web Portpolio`,
    owner: profile.ownerName,
    ownAge: () => new Date().getFullYear() - profile.ownBirthYear
}