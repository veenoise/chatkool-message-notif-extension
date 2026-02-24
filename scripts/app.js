setInterval(() => {
  try {
    // Get the last message in ChatKOOL see if it is typing or if the other person sent the last message
    const messageNode = Array.from(document.querySelector('ul').childNodes).at('-2')
    const endChat = Array.from(document.querySelector('ul').childNodes).at('-1')

    if (endChat.querySelector('p')) {
      document.querySelector('title').innerText = 'ChatKOOL -- end chat'
      document.querySelector("link[rel*='icon']").href = chrome.runtime.getURL('icons/favicon-end.ico')
      return
    }

    if (messageNode.querySelector('span') && messageNode.querySelector('span').style.backgroundColor === 'lightgray') {
      document.querySelector('title').innerText = '* ChatKOOL -- message'
      document.querySelector("link[rel*='icon']").href = chrome.runtime.getURL('icons/favicon-message.ico')
    } else if (messageNode.querySelector('svg')) {
      document.querySelector('title').innerText = 'ChatKOOL -- typing'
      document.querySelector("link[rel*='icon']").href = chrome.runtime.getURL('icons/favicon-typing.ico')
    } else {
      document.querySelector('title').innerText = 'ChatKOOL'
      document.querySelector("link[rel*='icon']").href = chrome.runtime.getURL('icons/favicon.ico')
    }     
  } catch (e) {
    document.querySelector('title').innerText = 'ChatKOOL'
    document.querySelector("link[rel*='icon']").href = chrome.runtime.getURL('icons/favicon.ico')
  }
}, 1000)