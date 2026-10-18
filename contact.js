document.write(`
  <div style="background: white; padding: 50px; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); flex: 1; min-width: 350px; border: 1px solid #e2e8f0; border-top: 4px solid #10B981; width: 100%; box-sizing: border-box;">
      <h3 style="color: #0B3954; font-size: 2rem; margin-top: 0; margin-bottom: 10px;">Let's Talk.</h3>
      <p style="color: #64748B; margin-bottom: 30px; font-size: 1.1rem;">Tell us what's eating up your time. We'll show you how custom AI and automation can fix it.</p>
      
      <!-- REPLACE YOUR_FORM_ID BELOW WITH YOUR ACTUAL FORMSPREE ID -->
      <form action="https://formspree.io/f/xwvqpwjj" method="POST">
          
          <input type="text" name="name" placeholder="Your Full Name" required style="width: 100%; padding: 18px; margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 1rem; background: #F8F9FA; box-sizing: border-box; transition: 0.3s; outline: none;" onfocus="this.style.borderColor='#10B981'; this.style.background='white';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#F8F9FA';">
          
          <input type="email" name="email" placeholder="Your Best Work Email" required style="width: 100%; padding: 18px; margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 1rem; background: #F8F9FA; box-sizing: border-box; transition: 0.3s; outline: none;" onfocus="this.style.borderColor='#10B981'; this.style.background='white';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#F8F9FA';">
          
          <input type="text" name="company" placeholder="Company Name or Website (Optional)" style="width: 100%; padding: 18px; margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 1rem; background: #F8F9FA; box-sizing: border-box; transition: 0.3s; outline: none;" onfocus="this.style.borderColor='#10B981'; this.style.background='white';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#F8F9FA';">
          
          <textarea name="message" placeholder="What repetitive task, data entry, or process is currently driving you crazy? Be specific..." required rows="5" style="width: 100%; padding: 18px; margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 1rem; background: #F8F9FA; box-sizing: border-box; resize: vertical; transition: 0.3s; outline: none;" onfocus="this.style.borderColor='#10B981'; this.style.background='white';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#F8F9FA';"></textarea>
          
          <button type="submit" style="background: #10B981; color: white; border: none; padding: 18px; width: 100%; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);" onmouseover="this.style.background='#059669'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#10B981'; this.style.transform='translateY(0)';">Start the Conversation</button>
      </form>
      
      <p style="text-align: center; color: #94A3B8; font-size: 0.85rem; margin-top: 15px;">🔒 No spam. No hard pitches. Your information is 100% secure.</p>
  </div>
`);
