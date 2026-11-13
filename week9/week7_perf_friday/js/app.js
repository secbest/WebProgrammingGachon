// External script, loaded with defer: runs after the HTML is parsed, so the DOM is ready.
const status = document.getElementById('status');
status.textContent = '✅ DOM was ready when this script ran (loaded with defer)';
status.className = 'ok';
