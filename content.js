(function() {
    // Create styles for the cheat menu
    var style = document.createElement('style');
    style.innerHTML = `
      /* Add your styles here */
    `;
    document.head.appendChild(style);
  
    // Create the cheat menu container
    var menu = document.createElement('div');
    menu.id = 'cheatMenu';
    menu.className = 'hidden'; // Initially hidden off-screen
    menu.innerHTML = `
      <h1>PXI Fusion X Cheat Menu</h1>
      <!-- Add your HTML content here -->
    `;
    document.body.appendChild(menu);
  
    // Create the toggle button
    var toggle = document.createElement('div');
    toggle.id = 'toggleMenu';
    toggle.innerHTML = '&#x25B2;';
    document.body.appendChild(toggle);
  
    // Toggle menu visibility with animation
    toggle.onclick = function() {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
        toggle.classList.add('rotated'); // Rotate arrow down
      } else {
        menu.classList.remove('visible');
        menu.classList.add('hiding'); // Trigger slide up animation
        setTimeout(function() {
          menu.classList.remove('hiding');
          menu.classList.add('hidden');
          toggle.classList.remove('rotated'); // Rotate arrow back up
        }, 300); // Same duration as the animation
      }
    };
  
    // Toggle switch for teleport functionality
    var teleportEnabled = false;
    var toggleTeleportSwitch = document.getElementById('toggleTeleport');
    toggleTeleportSwitch.onclick = function() {
      teleportEnabled = !teleportEnabled;
      if (teleportEnabled) {
        toggleTeleportSwitch.classList.add('checked');
        // Implement your teleport logic here when enabled
        console.log('Teleport enabled');
      } else {
        toggleTeleportSwitch.classList.remove('checked');
        // Implement your logic to disable teleport
        console.log('Teleport disabled');
      }
    };
  
    // Load SweetAlert2
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    script.onload = function() {
      // Helper functions
      function changeLevel(level, player) {
        if (level === 1) {
          player.data.stars = 0;
        } else if (level === 2) {
          player.data.stars = 10;
        } else {
          const offsetLevel = level - 2;
          const xpConstant = 1.042;
          player.data.stars = Math.round((((1 - Math.pow(xpConstant, offsetLevel)) / (1 - xpConstant)) * 20) + 10);
        }
        player.data.level = level;
      }
  
      function showSuccessMessage(message) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: message,
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    };
    document.head.appendChild(script);
  })();
  