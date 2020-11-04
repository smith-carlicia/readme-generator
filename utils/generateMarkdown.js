// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ## Title
  ${data.title}

  ## Description :
  ${data.description}

  ## Table of Contents :
  ${data.tableOfContents}

  ## Installation :
  ${data.installation}

  ## Usage :
  ${data.usage}

  ## Site Link: 
  ${data.siteLink}
  
  ## GitHub URL:
  ${data.repoLink}
  ## Credits : 
  ${data.credits}

  ## License :
  ${data.license}

  ## Badge:
  ${data.badges}

  ## Contributors :
  ${data.contributing}

  ## Test :
  ${data.tests}
`;
}

module.exports = generateMarkdown;
