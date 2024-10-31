
// On ready, add a listener for clicks on #btn to call sendImmediately
document.addEventListener('DOMContentLoaded', function() {
    console.log('MinPWA extension index script observed the page load');
    document.getElementById('btn').addEventListener('click', sendImmediately);

    // Note navigator.serviceWorker.register is not for
    // registering the service worker of the extension.
});

function sendImmediately() {
    console.log('Button clicked');
  
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Task 1',
        description: 'This is task 1',
      }),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('Success:', data);
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }

