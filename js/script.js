function toggleTheme(){
  var html = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var isDark = html.getAttribute('data-theme') === 'dark';
  if(isDark){ html.removeAttribute('data-theme'); btn.textContent = '🌙'; }
  else { html.setAttribute('data-theme','dark'); btn.textContent = '☀️'; }
}
// Mặc định theo cài đặt hệ thống của trình duyệt khi tải trang
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.documentElement.setAttribute('data-theme','dark');
  window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('themeToggle').textContent = '☀️';
  });
}