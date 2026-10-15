document.write(`
  <style>
    .faq-chat-btn { position: fixed; bottom: 20px; right: 20px; background: #10B981; color: white; border: none; border-radius: 50px; padding: 12px 20px; font-weight: bold; cursor: pointer; z-index: 1000; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .faq-chat-window { display: none; position: fixed; bottom: 70px; right: 20px; width: 300px; background: white; border: 1px solid #ddd; border-radius: 8px; z-index: 1000; box-shadow: 0 10px 15px rgba(0,0,0,0.1); overflow: hidden; font-family: system-ui, sans-serif; }
    .faq-header { background: #0B3954; color: white; padding: 15px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; }
    .faq-body { padding: 15px; max-height: 350px; overflow-y: auto; }
    .faq-item { margin-bottom: 10px; }
    .faq-q { background: #F8F9FA; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: 600; font-size: 14px; border: 1px solid #eee; transition: 0.2s; }
    .faq-q:hover { background: #e2e8f0; }
    .faq-a { display: none; padding: 10px; font-size: 13px; color: #475569; border-left: 3px solid #10B981; margin-top: 5px; background: #fdfdfd; line-height: 1.5; }
  </style>

  <button class="faq-chat-btn" onclick="toggleChat()">💬 Ask a Question</button>

  <div class="faq-chat-window" id="faqWindow">
    <div class="faq-header">
      ASW Quick Answers
      <span style="cursor:pointer; font-size: 18px;" onclick="toggleChat()">×</span>
    </div>
    <div class="faq-body">
      
      <div class="faq-item">
        <div class="faq-q" onclick="toggleAnswer('a1')">What exactly does ASW do?</div>
        <div class="faq-a" id="a1">We streamline your business by automating repetitive tasks, building custom GPTs, and deploying smart chatbots so you can focus on growth instead of manual work.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleAnswer('a2')">What kind of things can you automate?</div>
        <div class="faq-a" id="a2">We can automate multiple areas of your business using tools like n8n and Make.com. This includes data entry, CRM updates, lead generation, email sequences, and connecting different apps together so they communicate automatically.</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-q" onclick="toggleAnswer('a3')">How much does it cost?</div>
        <div class="faq-a" id="a3">Pricing depends on the complexity of the workflow or the chatbot. Reach out through our contact form below for a free custom quote.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleAnswer('a4')">Do I need technical skills?</div>
        <div class="faq-a" id="a4">Not at all! We build, configure, and deploy the entire system for you, handing over a fully functional, easy-to-use solution.</div>
      </div>

    </div>
  </div>

  <script>
    function toggleChat() {
      var win = document.getElementById('faqWindow');
      win.style.display = (win.style.display === 'block') ? 'none' : 'block';
    }
    function toggleAnswer(id) {
      var ans = document.getElementById(id);
      ans.style.display = (ans.style.display === 'block') ? 'none' : 'block';
    }
  </script>
`);
