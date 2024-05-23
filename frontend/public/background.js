let currentTab = null;
let startTime = null;

// Function to fetch time limits from the backend
function fetchTimeLimits() {
  return fetch('http://localhost:3000/time_limits')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching time limits:', error);
      return [];
    });
}

// Function to fetch restricted sites from the backend
function fetchRestrictedSites() {
  return fetch('http://localhost:3000/restricted_sites')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching restricted sites:', error);
      return [];
    });
}

// Function to send website usage data to the backend
function sendWebsiteUsageToBackend(tabUrl, timeSpent) {
  return fetch('http://localhost:3000/website_usages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      website_usage: {
        url: tabUrl,
        time_spent: timeSpent,
        user_id: 1 // Replace with actual user_id
      }
    }),
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error sending website usage data to backend:', error);
  });
}

// Function to fetch feedback tips from the backend
function fetchFeedback() {
  return fetch('http://localhost:3000/feedbacks')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching feedback:', error);
      return [];
    });
}

// Function to fetch watch list from the backend
function fetchWatchList() {
  return fetch('http://localhost:3000/watch_lists')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching watch list:', error);
      return [];
    });
}

// Function to fetch time categories from the backend
// function fetchTimeCategories(userId) {
//   return fetch(`http://localhost:3000/users/${userId}/time_categories`)
//     .then(response => response.json())
//     .catch(error => {
//       console.error('Error fetching time categories:', error);
//       return [];
//     });
// }

// Function to generate reports
// function generateReport(userId, reportType) {
//   return fetch(`http://localhost:3000/users/${userId}/reports/generate?report_type=${reportType}`)
//     .then(response => response.json())
//     .catch(error => {
//       console.error('Error generating report:', error);
//       return {};
//     });
// }

// Function to delete all user data
// function deleteAllData(userId) {
//   return fetch(`http://localhost:3000/users/${userId}`, {
//     method: 'DELETE',
//   })
//   .then(response => response.json())
//   .catch(error => {
//     console.error('Error deleting user data:', error);
//   });
// }

// Function to update tab and send data
function updateTabAndSendData(tab) {
  if (currentTab && tab.url === currentTab.url) {
    const timeSpent = Date.now() - startTime;

    Promise.all([fetchRestrictedSites(), fetchTimeLimits()])
      .then(([restrictedSites, timeLimits]) => {
        const isRestricted = restrictedSites.some(site => tab.url.includes(site.url));
        const timeLimitEntry = timeLimits.find(entry => tab.url.includes(entry.url));

        if (isRestricted) {
          chrome.tabs.update(tab.id, { url: 'http://localhost:3001/#/restricted' });
        } else if (timeLimitEntry) {
          sendWebsiteUsageToBackend(currentTab.url, timeSpent)
            .then(data => {
              const aggregateTimeSpent = data.aggregate_time_spent || timeSpent;
              if (aggregateTimeSpent > timeLimitEntry.time_limit * 60 * 1000) {
                chrome.tabs.update(tab.id, { url: 'http://localhost:3001/#/limit_exceeds' });
              }
            });
        } else {
          sendWebsiteUsageToBackend(currentTab.url, timeSpent);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  currentTab = tab;
  startTime = Date.now();
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    updateTabAndSendData(tab);
  }
});

// Listen for tab activation
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    updateTabAndSendData(tab);
  });
});

// Listen for tab deactivation
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  const timeSpent = Date.now() - startTime;
  const tabUrl = currentTab ? currentTab.url : null;
  if (tabUrl) {
    sendWebsiteUsageToBackend(tabUrl, timeSpent);
  }
});

// Example usage of the new functions
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'fetchFeedback') {
//     fetchFeedback().then(data => sendResponse({ data }));
//   } else if (request.action === 'fetchWatchList') {
//     fetchWatchList().then(data => sendResponse({ data }));
//   } else if (request.action === 'fetchTimeCategories') {
//     fetchTimeCategories(request.userId).then(data => sendResponse({ data }));
//   } else if (request.action === 'generateReport') {
//   generateReport(request.userId, request.reportType).then(data => sendResponse({ data }));
//   } else if (request.action === 'deleteAllData') {
//   deleteAllData(request.userId).then(data => sendResponse({ data }));
//   }
//   return true; // Will respond asynchronously
//   });
