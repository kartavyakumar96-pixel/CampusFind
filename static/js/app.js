document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector('input[name="q"]');
  if (search) {
    search.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        search.value = "";
      }
    });
  }

  document.querySelectorAll(".flash").forEach((message) => {
    window.setTimeout(() => {
      message.classList.add("flash-hide");
    }, 5000);
  });

  const fileInput = document.querySelector('input[type="file"][name="image"]');
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      const hint = fileInput.parentElement.querySelector(".file-name");
      if (hint) hint.remove();
      if (file) {
        const label = document.createElement("small");
        label.className = "file-name";
        label.textContent = `Selected: ${file.name}`;
        fileInput.insertAdjacentElement("afterend", label);
      }
      // --- Copy Email Logic ---
  const copyEmailBtn = document.querySelector('.copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email');
      const originalText = copyEmailBtn.textContent;
      
      try {
        // Attempt to copy to clipboard
        await navigator.clipboard.writeText(email);
        copyEmailBtn.textContent = 'Copied!';
        copyEmailBtn.classList.add('success');
      } catch (err) {
        // Fallback if clipboard API fails or permissions are denied
        copyEmailBtn.textContent = 'Failed';
        copyEmailBtn.classList.add('error');
        console.error('Failed to copy email: ', err);
      }
      
      // Revert the button text and styling after 2 seconds
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.classList.remove('success', 'error');
      }, 2000);
    });
  }
    });
  }
});
