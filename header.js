document.write(`
  <header style="background: #0B3954; color: white; padding: 1rem 5%; font-family: 'Inter', sans-serif; border-bottom: 2px solid #10B981; position: sticky; top: 0; z-index: 1000;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
      
      <!-- LOGO IMAGE (gpg) -->
      <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
        <img src="logo.png" alt="ASW Logo" style="height: 40px; width: auto; max-width: 160px; object-fit: contain;">
      </a>

      <!-- MOBILE-FRIENDLY NAVIGATION -->
      <nav style="display: flex; align-items: center; gap: 18px; font-weight: 500; font-size: 0.95rem; flex-wrap: wrap;">
        <a href="index.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Home</a>
        <a href="services.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Services</a>
        <a href="blog.html" style="color: white; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#10B981'" onmouseout="this.style.color='white'">Blog</a>
        
        <a href="index.html#contact" style="background: #10B981; color: white; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-weight: 700; transition: background 0.3s; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10B981'">Let's Talk</a>
      </nav>

    </div>
  </header>
`);
