const linksSocialMidia = {
  github: 'Besoga1001',
  youtube: 'channel/UC_GDlXwMbGTphkcH6MxZmzQ',
  facebook: 'bernardo.s.garcia.1',
  instagram: 'bernardo.s.garcia',
  twitter: 'bersgarcia'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHutProbileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHutProbileInfos()
