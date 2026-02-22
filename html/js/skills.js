const canvas = document.getElementById("network");
      const ctx = canvas.getContext("2d");

      // Dynamic size
      const BOUNDS = { width: 0, height: 0 };
      function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        BOUNDS.width = canvas.width;
        BOUNDS.height = canvas.height;
      }
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      let isDragging = false;
      let draggedNode = null;

      window.addEventListener("mousedown", (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        nodes.forEach((node) => {
          const dist = Math.hypot(x - node.x, y - node.y);
          if (dist < node.radius + 10) {
            isDragging = true;
            draggedNode = node;
          }
        });
      });

      window.addEventListener("mouseup", () => {
        isDragging = false;
        draggedNode = null;
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging || !draggedNode) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        draggedNode.targetX = Math.min(
          Math.max(x, draggedNode.radius),
          BOUNDS.width - draggedNode.radius
        );
        draggedNode.targetY = Math.min(
          Math.max(y, draggedNode.radius),
          BOUNDS.height - draggedNode.radius
        );
      });

      function lerp(a, b, t) {
        return a + (b - a) * t;
      }

      class Node {
        constructor(x, y, radius, color, text, logoUrl) {
          this.x = x;
          this.y = y;
          this.targetX = x;
          this.targetY = y;
          this.radius = radius;
          this.color = color;
          this.text = text;
          this.logo = new Image();
          this.logo.src = logoUrl;
          this.dx = (Math.random() - 0.5) * 1.1;
          this.dy = (Math.random() - 0.5) * 1.1;
          this.textX = x + radius + 14;
          this.textY = y;

          // Fade-in
          this.opacity = 0;
          this.delay = Math.random() * 60; // frames delay
        }

        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity; // fade
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.closePath();

          if (this.logo.complete) {
            const size = this.radius * 1.1;
            ctx.drawImage(
              this.logo,
              this.x - size / 2.2,
              this.y - size / 2.2,
              size * 0.8,
              size * 0.8
            );
          }

          ctx.shadowBlur = 0;
          ctx.fillStyle = "#fff";
          ctx.font = "15px Poppins";
          ctx.textAlign = "left";
          ctx.fillText(this.text, this.textX, this.textY + 5);
          ctx.restore();
        }

        update() {
          if (this.delay > 0) {
            this.delay -= 1;
          } else {
            this.opacity = Math.min(this.opacity + 0.02, 1);
          }

          if (!isDragging || draggedNode !== this) {
            this.targetX += this.dx;
            this.targetY += this.dy;
            if (this.targetX + this.radius > BOUNDS.width || this.targetX - this.radius < 0)
              this.dx = -this.dx;
            if (this.targetY + this.radius > BOUNDS.height || this.targetY - this.radius < 0)
              this.dy = -this.dy;
            this.targetX = Math.min(Math.max(this.targetX, this.radius), BOUNDS.width - this.radius);
            this.targetY = Math.min(Math.max(this.targetY, this.radius), BOUNDS.height - this.radius);
          }

          this.x = lerp(this.x, this.targetX, 0.1);
          this.y = lerp(this.y, this.targetY, 0.1);
          this.textX = lerp(this.textX, this.x + this.radius + 14, 0.05);
          this.textY = lerp(this.textY, this.y, 0.05);
          this.draw();
        }
      }

      const logoBase = "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/";
      const skills = [
        { color: "#ff6f00", text: "HTML5", logo: "html5.svg" },
        { color: "#2965f1", text: "CSS3", logo: "css3.svg" },
        { color: "#cc6699", text: "SCSS", logo: "sass.svg" },
        { color: "#f7df1e", text: "JavaScript", logo: "javascript.svg" },
        { color: "#61dafb", text: "ReactJs", logo: "react.svg" },
        { color: "#777bb4", text: "PHP", logo: "php.svg" },
        { color: "#00758f", text: "MySQL", logo: "mysql.svg" },
        { color: "#21759b", text: "WordPress", logo: "wordpress.svg" },
        { color: "#f29111", text: "Laravel", logo: "laravel.svg" },
        { color: "#f05033", text: "Git", logo: "git.svg" },
        { color: "#ffffff", text: "GitHub", logo: "github.svg" },
        { color: "#a259ff", text: "Figma", logo: "figma.svg" } // Figma
      ];

      //
      const centerX = BOUNDS.width / 2;
      const centerY = BOUNDS.height / 2;
      const spread = 250;

      let nodes = skills.map((s, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * spread * (0.7 + Math.random() * 0.6);
        const y = centerY + Math.sin(angle) * spread * (0.7 + Math.random() * 0.6);
        return new Node(x, y, 28, s.color, s.text, `${logoBase}${s.logo}`);
      });

      const groups = [
        {
          name: "Web",
          nodes: ["HTML5", "CSS3", "SCSS", "JavaScript", "ReactJs"],
          lineStyle: { width: 2, dash: [], color: "rgba(255,255,255,0.2)", round: true },
        },
        {
          name: "Backend",
          nodes: ["PHP", "MySQL", "WordPress", "Laravel"],
          lineStyle: { width: 1.5, dash: [5, 5], color: "rgba(0,255,255,0.15)", round: true },
        },
        {
          name: "VCS",
          nodes: ["Git", "GitHub"],
          lineStyle: { width: 3, dash: [], color: "rgba(255,100,100,0.25)", round: true },
        },
        {
          name: "Design",
          nodes: ["Figma"],
          lineStyle: { width: 2, dash: [4, 4], color: "rgba(162,89,255,0.2)", round: true },
        },
      ];

      function getGroup(node) {
        return groups.find((g) => g.nodes.includes(node.text));
      }

      function connectNodes() {
        for (let a = 0; a < nodes.length; a++) {
          for (let b = a + 1; b < nodes.length; b++) {
            const groupA = getGroup(nodes[a]);
            const groupB = getGroup(nodes[b]);
            const dx = nodes[a].x - nodes[b].x;
            const dy = nodes[a].y - nodes[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (groupA === groupB && distance < 280) {
              ctx.beginPath();
              ctx.strokeStyle = groupA.lineStyle.color;
              ctx.lineWidth = groupA.lineStyle.width;
              ctx.setLineDash(groupA.lineStyle.dash);
              ctx.lineCap = groupA.lineStyle.round ? "round" : "butt";
              ctx.moveTo(nodes[a].x, nodes[a].y);
              ctx.lineTo(nodes[b].x, nodes[b].y);
              ctx.stroke();
              ctx.setLineDash([]);
            }

            const minDist = nodes[a].radius + nodes[b].radius;
            if (distance < minDist) {
              const angle = Math.atan2(dy, dx);
              const force = (minDist - distance) * 0.15;
              const fx = Math.cos(angle) * force;
              const fy = Math.sin(angle) * force;

              if (nodes[a] !== draggedNode) {
                nodes[a].targetX += fx;
                nodes[a].targetY += fy;
              }
              if (nodes[b] !== draggedNode) {
                nodes[b].targetX -= fx;
                nodes[b].targetY -= fy;
              }
            }
          }
        }
      }

      // BG TXT
      function drawBackgroundText() {
        ctx.save();
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 3;
        ctx.font = `${BOUNDS.width / 6}px "Poller One", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText("", BOUNDS.width / 2, BOUNDS.height / 2);
        ctx.restore();
      }

      function animate() {
        ctx.clearRect(0, 0, BOUNDS.width, BOUNDS.height);
        drawBackgroundText();
        connectNodes();
        nodes.forEach((node) => node.update());
        requestAnimationFrame(animate);
      }

      animate();