// DOM Project

const milestoneData = JSON.parse(data).data;

const displayMilestone = () => {
  const milestones = document.getElementById('milestones');
  milestoneData.forEach((milestone) => {
    // console.log(milestone);
    const { name, modules } = milestone;
    const div = document.createElement('div');
    div.classList.add('milestone', 'border-b');
    div.innerHTML = `
        <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div class="toggle">
              <p>${name} <span><i class="fas fa-chevron-down"></i></span></p>
            </div>
        </div>
        <div class="hidden_panel">
              ${modules
                .map((module) => {
                  return `
                    
                    <div class="module border-b">
                        <p>${module.name}</p>
                    </div>

                    `;
                })
                .join('')}
            </div>
          </div>
    `;
    milestones.appendChild(div);

    const toggle = div.querySelector('.toggle');
    const hiddenPanel = div.querySelector('.hidden_panel');
    toggle.addEventListener('click', () => {
      const shownPanel = document.querySelector('.hidden_panel.show');
      if (shownPanel && shownPanel !== hiddenPanel) {
        shownPanel.classList.remove('show');
      }
      hiddenPanel.classList.toggle('show');
    });
  });
};

displayMilestone();
