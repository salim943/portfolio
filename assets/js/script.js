    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('overlay');
    const signupForm = document.getElementById('signupForm');
    const closeBtn = document.getElementById('closeBtn');

    function isMobile() {
      return window.innerWidth < 768;
    }

    function showModal() {
      if (isMobile()) {
        overlay.classList.add('opacity-1', 'z-50');
        overlay.classList.remove('opacity-0', '-z-50');
        signupForm.classList.add('left-0');
        signupForm.classList.remove('left-[-100%]');
        document.body.style.overflowY = 'hidden';
      }
    }

    function closeModal() {
      overlay.classList.add('opacity-0', '-z-50');
      overlay.classList.remove('opacity-1', 'z-50');
      signupForm.classList.add('left-[-100%]');
      signupForm.classList.remove('left-0');
      document.body.style.overflowY = 'scroll';
    }

    menuBtn?.addEventListener('click', showModal);
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);


    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#e95420',
          },
          animation: {
            'bg-move': 'bgMove 30s linear infinite',
          },
          keyframes: {
            bgMove: {
              '0%, 100%': { backgroundPosition: 'center' },
              '50%': { backgroundPosition: 'bottom right' },
            },
          },
          backgroundImage: {
            'svg-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e95420' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H30L0 30zM10 40L40 10V0L0 40h10z'/%3E%3C/g%3E%3C/svg%3E\")"
          }
        }
      }
    }