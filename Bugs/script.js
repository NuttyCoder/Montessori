document.addEventListener('DOMContentLoaded', function() {
    const insectData = {
      butterfly: {
        title: "🦋 Butterfly Metamorphosis",
        description: "Butterflies undergo complete metamorphosis with four distinct stages: egg, caterpillar (larva), chrysalis (pupa), and adult butterfly. The process begins when a female butterfly lays eggs on a host plant. When the eggs hatch, tiny caterpillars emerge and begin feeding on leaves. Eventually, the caterpillar forms a chrysalis, inside which its body completely transforms. After 10-14 days, an adult butterfly emerges.",
        stages: [
          {
            name: "Egg",
            emoji: "🥚",
            info: "Butterfly eggs are tiny, usually laid on specific host plants. The eggs have protective shells and contain nutrients for the developing embryo."
          },
          {
            name: "Caterpillar",
            emoji: "🐛",
            info: "Caterpillars are eating machines! They grow rapidly and shed their skin multiple times. Their main job is to eat and store energy for metamorphosis."
          },
          {
            name: "Chrysalis",
            emoji: "🧶",
            info: "Inside the chrysalis, the caterpillar's body breaks down into a soup of cells. Then, using special cell groups, it rebuilds itself into a butterfly with wings, antennae, and other adult features."
          },
          {
            name: "Adult",
            emoji: "🦋",
            info: "The adult butterfly emerges with wet, crumpled wings that it must expand and dry before flying. Adult butterflies feed on nectar and focus on reproduction to continue the cycle."
          }
        ]
      },
      bee: {
        title: "🐝 Bee Metamorphosis",
        description: "Bees undergo complete metamorphosis with four stages: egg, larva, pupa, and adult. The queen lays eggs in honeycomb cells, which hatch into larvae. Worker bees feed the larvae royal jelly or honey and pollen. After about a week, the cell is capped with wax and the larva becomes a pupa. Inside the sealed cell, the pupa transforms into an adult bee.",
        stages: [
          {
            name: "Egg",
            emoji: "🥚",
            info: "Bee eggs are tiny white ovals laid by the queen in individual honeycomb cells. Whether the egg will become a worker, drone, or queen depends on if it's fertilized and how it's fed."
          },
          {
            name: "Larva",
            emoji: "🐛",
            info: "Bee larvae are white, legless grubs that curl in a C-shape in their cells. Worker bees feed them constantly, and they grow extremely quickly, molting five times."
          },
          {
            name: "Pupa",
            emoji: "🥜",
            info: "When a larva is fully grown, workers cap its cell with wax. Inside, it spins a cocoon and transforms. During this stage, adult features develop, including legs, wings, and compound eyes."
          },
          {
            name: "Adult",
            emoji: "🐝",
            info: "The adult bee chews through the wax cap to emerge. New workers start with hive duties like cleaning and nursing before progressing to foraging. Queens can live for years, while workers typically live for weeks."
          }
        ]
      },
      beetle: {
        title: "🪲 Beetle Metamorphosis",
        description: "Beetles undergo complete metamorphosis with four stages: egg, larva (grub), pupa, and adult. Beetle larvae often look completely different from adults, with some resembling caterpillars or worms. After a period of growth, the larva creates a pupal chamber where it transforms into an adult beetle with hardened wing covers called elytra.",
        stages: [
          {
            name: "Egg",
            emoji: "🥚",
            info: "Beetle eggs come in various shapes and sizes. They may be laid in soil, on leaves, under bark, or in rotting wood, depending on the species and what the larvae will feed on."
          },
          {
            name: "Grub",
            emoji: "🐛",
            info: "Beetle larvae (grubs) have soft bodies and hard head capsules with strong jaws. They may be C-shaped, worm-like, or flattened depending on species. Many live hidden in soil, wood, or plant tissues."
          },
          {
            name: "Pupa",
            emoji: "🌰",
            info: "During the pupal stage, the beetle doesn't feed or move much. Inside its protective case, the larval body breaks down and rebuilds into the adult form with legs, antennae, and wings."
          },
          {
            name: "Adult",
            emoji: "🪲",
            info: "Adult beetles have hard forewings (elytra) that protect their delicate hindwings. New adults are often pale and soft, darkening and hardening over time. Adults may live from weeks to years depending on the species."
          }
        ]
      },
      fly: {
        title: "🪰 Fly Metamorphosis",
        description: "Flies undergo complete metamorphosis with four stages: egg, larva (maggot), pupa, and adult fly. Female flies lay eggs in organic material that will provide food for the larvae. These eggs hatch into legless maggots that feed and grow rapidly. Instead of spinning a cocoon, fly larvae form a hardened case from their last larval skin, inside which they transform into adult flies.",
        stages: [
          {
            name: "Egg",
            emoji: "🥚",
            info: "Fly eggs are usually small, white, and oval-shaped. House flies lay eggs in clusters of 75-150 in decaying organic matter. The eggs hatch within 8-20 hours in optimal conditions."
          },
          {
            name: "Maggot",
            emoji: "🐛",
            info: "Fly larvae (maggots) are legless, cream-colored, and have no distinct head. They have mouth hooks for feeding and breathe through spiracles at their rear end. They grow rapidly through three developmental stages."
          },
          {
            name: "Pupa",
            emoji: "🫘",
            info: "Unlike other insects, fly larvae transform their last larval skin into a protective case called a puparium. Inside this barrel-shaped shell, the body reorganizes completely into the adult form."
          },
          {
            name: "Adult",
            emoji: "🪰",
            info: "When development is complete, the adult fly pushes open the end of the puparium. New flies have unexpanded wings and wrinkled bodies but quickly inflate them. Adult flies can live from a few days to several weeks."
          }
        ]
      }
    };
  
    const insectButtons = document.querySelectorAll('.insect-btn');
    const stageContainers = document.querySelectorAll('.stage-container');
    const infoCard = document.getElementById('info-card');
    const progressFill = document.querySelector('.progress-fill');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
  
    let currentInsect = 'butterfly';
    let currentStage = 0;
  
    function changeInsect(insectType) {
      insectButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.insect === insectType) {
          btn.classList.add('active');
        }
      });
  
      stageContainers.forEach(container => {
        container.classList.remove('active');
        if (container.id === `${insectType}-container`) {
          container.classList.add('active');
        }
      });
  
      updateInfoCard(insectType);
  
      currentInsect = insectType;
      changeStage(0);
    }
  
    function updateInfoCard(insectType, stageIndex = null) {
      if (stageIndex === null) {
        infoCard.innerHTML = `
                          <h2 class="info-title"><span class="info-emoji">${insectData[insectType].title.split(' ')[0]}</span> ${insectType.charAt(0).toUpperCase() + insectType.slice(1)} Metamorphosis</h2>
                          <p>${insectData[insectType].description}</p>
                      `;
      } else {
        const stage = insectData[insectType].stages[stageIndex];
        infoCard.innerHTML = `
                          <h2 class="info-title"><span class="info-emoji">${stage.emoji}</span> ${stage.name} Stage</h2>
                          <p>${stage.info}</p>
                      `;
      }
    }
  
    function changeStage(stageIndex) {
      currentStage = stageIndex;
  
      const stages = document.querySelectorAll(`#${currentInsect}-container .stage`);
      stages.forEach((stage, index) => {
        stage.classList.remove('active');
        if (index === stageIndex) {
          stage.classList.add('active');
        }
      });
  
      progressFill.style.width = `${stageIndex * 33.33}%`;
  
      updateInfoCard(currentInsect, stageIndex);
  
      prevBtn.disabled = stageIndex === 0;
      nextBtn.disabled = stageIndex === 3;
    }
  
    insectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        changeInsect(btn.dataset.insect);
      });
    });
  
    document.querySelectorAll('.stage').forEach(stage => {
      stage.addEventListener('click', () => {
        changeStage(parseInt(stage.dataset.stage));
      });
    });
  
    prevBtn.addEventListener('click', () => {
      if (currentStage > 0) {
        changeStage(currentStage - 1);
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentStage < 3) {
        changeStage(currentStage + 1);
      }
    });
  
    changeInsect('butterfly');
  });
