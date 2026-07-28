<template>
  <div class="about">
    <!-- Hero -->
    <section class="hero dot-grid">
      <div class="container hero-inner">
        <div class="hero-avatar-wrap">
          <div class="hero-avatar">
            <img src="@/assets/profile.jpg" alt="Alex Chen" class="avatar-img" @error="imgError = true"
              v-if="!imgError" />
            <div v-else class="avatar-fallback" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="60" fill="var(--accent-bg)" />
                <circle cx="60" cy="46" r="22" fill="var(--accent)" opacity="0.9" />
                <ellipse cx="60" cy="100" rx="34" ry="22" fill="var(--accent)" opacity="0.7" />
              </svg>
            </div>
          </div>
          <div class="hero-status">
            <span class="status-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div class="hero-text">
          <h1 class="hero-name display">Meriem Afaf Haddou</h1>
          <p class="hero-title">{{ profile.title }}</p>
          <p class="hero-tagline">{{ profile.tagline }}</p>
          <div class="hero-actions">
            <a :href="`mailto:${profile.contact.email}`" class="btn btn-primary">
              <span class="material-symbols-outlined">mail</span>
              Get in touch
            </a>
            <a :href="profile.resumeUrl" class="btn btn-secondary">
              <span class="material-symbols-outlined">download</span>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal info card + Bio -->
    <section class="section">
      <div class="container info-bio-grid">
        <!-- Contact card -->
        <aside class="info-card card">
          <h2 class="info-card-title">Contact & Info</h2>
          <ul class="info-list">
            <li class="info-item">
              <span class="info-icon info-icon--beige">
                <span class="material-symbols-outlined">mail</span>
              </span>
              <div class="info-content">
                <span class="info-label">Email</span>
                <a :href="`mailto:${profile.contact.email}`" class="info-value info-value--link">
                  {{ profile.contact.email }}
                </a>
              </div>
            </li>

            <li class="info-item">
              <span class="info-icon info-icon--beige">
                <span class="material-symbols-outlined">location_on</span>
              </span>
              <div class="info-content">
                <span class="info-label">Location</span>
                <span class="info-value info-value--text">
                  {{ profile.contact.location }}
                </span>
              </div>
            </li>

            <li class="info-item">
              <span class="info-icon info-icon--beige">
                <span class="material-symbols-outlined">work</span>
              </span>
              <div class="info-content">
                <span class="info-label">LinkedIn</span>
                <a :href="profile.contact.linkedin" target="_blank" rel="noopener" class="info-value info-value--link">
                  in/meriem-afaf-haddou-791964227
                </a>
              </div>
            </li>

            <li class="info-item">
              <span class="info-icon info-icon--beige">
                <span class="material-symbols-outlined">code</span>
              </span>
              <div class="info-content">
                <span class="info-label">GitHub</span>
                <a :href="profile.contact.github" target="_blank" rel="noopener" class="info-value info-value--link">
                  github.com/MeriemAfafHaddou
                </a>
              </div>
            </li>

            <li class="info-item info-item--langs">
              <span class="info-icon info-icon--beige">
                <span class="material-symbols-outlined">public</span>
              </span>
              <div class="info-content">
                <span class="info-label">Languages</span>
                <div class="lang-list">
                  <span v-for="lang in profile.contact.languages" :key="lang" class="lang-badge">
                    {{ lang }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </aside>

        <!-- Bio -->
        <div class="bio">
          <p class="section-label">Biography</p>
          <h2 class="section-title">About me</h2>
          <div class="bio-paragraphs">
            <p v-for="(para, i) in profile.bio" :key="i" class="bio-para">{{ para }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="divider container"></div>

    <!-- Skills -->
    <section class="section skills-section">
      <div class="container">
        <p class="section-label">Stack</p>
        <h2 class="section-title">Technologies & Skills</h2>
        <div class="skills-grid">
          <div v-for="group in skills" :key="group.category" class="skill-group card">
            <h3 class="skill-group-title">{{ group.category }}</h3>
            <div class="skill-chips">
              <span v-for="item in group.items" :key="item" class="tech-chip">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { profile, skills } from '@/data/data.js'
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────── */
.hero {
  padding: 40px 0 40px;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
}

.hero-inner {
  display: flex;
  align-items: center;
  gap: 48px;
}

.hero-avatar-wrap {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--border);
  box-shadow: 0 0 0 6px var(--bg-subtle);
  background: var(--accent-bg);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-fallback {
  width: 100%;
  height: 100%;
}

.avatar-fallback svg {
  width: 100%;
  height: 100%;
}

.hero-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22C55E;
  flex-shrink: 0;
}

.hero-text {
  flex: 1;
}

.hero-name {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: var(--text);
  margin: 0 0 6px;
  font-weight: 400;
}

.hero-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 10px;
}

.hero-tagline {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* ── Info + Bio grid ─────────────────────────── */
.info-bio-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: start;
}

/* ── Contact card ────────────────────────────── */
.info-card {
  padding: 0;
  position: sticky;
  top: calc(var(--nav-height) + 24px);
  overflow: hidden;
}

.info-card-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
  padding: 18px 20px 14px;
  border-bottom: 1px solid var(--border);
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
}

/* Each row */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding:20px;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}

.info-item:last-child {
  border-bottom: none;
}

.info-item--langs {
  align-items: flex-start;
}

/* Icon bubble */
.info-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.info-icon--beige {
  background: rgba(59, 130, 246, 0.06);
  color: #8F7664;

  border: 1px solid rgba(59, 130, 246, 0.12);
}

.dark .info-icon--beige {
  background: rgba(59, 130, 246, 0.15);
  color: #60A5FA;
}

/* Label + value stack */
.info-content {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.info-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--text-subtle);
  line-height: 1.2;
}

.info-value {
  font-size: 13px;
  line-height: 1.45;
  word-break: break-all;
}

.info-value--link {
  color: var(--accent);
  font-weight: 500;
  text-decoration: none;
  transition: opacity var(--transition);
}

.info-value--link:hover {
  opacity: 0.72;
}

.info-value--text {
  color: #334155;
  /* intentionally darker than --text-muted in light mode */
  font-weight: 500;
}

.dark .info-value--text {
  color: #CBD5E1;
}

/* Language tags */
.lang-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}

.lang-badge {
  display: inline-flex;
  align-items: center;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;

  background: rgba(59, 130, 246, 0.06);

  border: 1px solid rgba(59, 130, 246, 0.12);

  transition: all 0.2s ease;
}

.dark .lang-badge {
  background: rgba(96, 165, 250, 0.12);
  color: #93c5fd;
  border-color: rgba(96, 165, 250, 0.18);
}

/* ── Bio ─────────────────────────────────────── */
.bio-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bio-para {
  font-size: 16px;
  color: #475569;
  /* richer than --text-muted, readable in light */
  line-height: 1.8;
}

.dark .bio-para {
  color: #94A3B8;
}

/* ── Skills ──────────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}

.skill-group {
  padding: 18px 18px 16px;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(15, 23, 42, 0.06);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-group:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.dark .skill-group {
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.08);
}

.skill-group-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;

  color: #64748b;

  margin-bottom: 12px;
  padding-bottom: 10px;

  border-bottom: 1px solid rgba(100, 116, 139, 0.15);
}

.dark .skill-group-title {
  color: rgba(148, 163, 184, 0.8);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-chip {
  display: inline-flex;
  align-items: center;

  padding: 5px 10px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;

  color: #334155;
  background: rgba(15, 23, 42, 0.04);

  border: 1px solid rgba(15, 23, 42, 0.06);

  transition: all 0.2s ease;
}

.dark .tech-chip {
  color: #cbd5e1;
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.tech-chip:hover {
  transform: translateY(-1px);
  background: rgba(59, 130, 246, 0.08);
  border-color: rgba(59, 130, 246, 0.2);
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 820px) {
  .hero-inner {
    flex-direction: column;
    text-align: center;
  }

  .hero-avatar-wrap {
    align-items: center;
  }

  .hero-tagline {
    margin: 0 auto 28px;
  }

  .hero-actions {
    justify-content: center;
  }

  .info-bio-grid {
    grid-template-columns: 1fr;
  }

  .info-card {
    position: static;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 0 48px;
  }

  .hero-name {
    font-size: 2rem;
  }
}
</style>