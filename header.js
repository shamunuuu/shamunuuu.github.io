document.write(`
  <header style="background: #0B3954; color: white; padding: 1.5rem 5%; font-family: 'Inter', sans-serif; border-bottom: 2px solid #10B981;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
      
      <!-- LOGO -->
      <a href="index.html" style="display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1.8rem; letter-spacing: -0.5px; text-decoration: none; color: white;">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16.01"></line>
          <line x1="16" y1="16" x2="16" y2="16.01"></line>
          <path d="M10 19.5c.5.5 1.5.5 2 0"></path>
        </svg>
        ASW
      </a>

      <!-- NAVIGATION LINKS -->
      <nav style="display: flex; align-items: center; gap: 30px; font-weight: 500;">
        <a href="index.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Home</a>
        
        <a href="services.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Services</a>
        
        <!-- NEW BLOG LINK -->
        <a href="blog.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Blog</a>
        
        <a href="contact.html" style="background: #10B981; color: white; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-weight: 700; transition: background 0.3s; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10B981'">Let's Get Started</a>
      </nav>

    </div>
  </header>
`);
