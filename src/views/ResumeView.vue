<template>
  <div class="resume-page">
    <div class="page-hero">
      <div class="container">
        <p class="section-label">Career</p>
        <h1 class="page-title display">Resume</h1>
        <p class="page-subtitle">Software Engineer focused on designing maintainable backend systems and full-stack applications using Python, Django, PostgreSQL, and Vue.js</p>
        <a :href="profile.resumeUrl" class="btn btn-primary" style="margin-top: 20px">
          <span class="material-symbols-outlined">download</span>
          Download PDF
        </a>
      </div>
    </div>

    <!-- Experience -->
    <section class="section">
      <div class="container container--narrow">
        <p class="section-label">Work</p>
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div
            v-for="(item, idx) in experience"
            :key="item.id"
            class="timeline-item"
            :class="{ 'timeline-item--last': idx === experience.length - 1 }"
          >
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-card card">
              <div class="timeline-header">
                <div class="timeline-meta">
                  <h3 class="timeline-role">{{ item.role }}</h3>
                  <div class="timeline-company-row">
                    <span class="timeline-company">{{ item.company }}</span>
                    <span class="timeline-sep">·</span>
                    <span class="timeline-location badge">{{ item.location }}</span>
                  </div>
                </div>
                <span class="timeline-duration badge badge-beige">{{ item.duration }}</span>
              </div>
              <p class="timeline-desc">{{ item.description }}</p>
              <ul class="timeline-achievements">
                <li v-for="(ach, ai) in item.achievements" :key="ai" class="timeline-achievement">
                  <span class="achievement-bullet">-</span>
                  {{ ach }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider container container--narrow"></div>

    <!-- Education -->
    <section class="section">
      <div class="container container--narrow">
        <p class="section-label">Academic</p>
        <h2 class="section-title">Education</h2>
        <div class="timeline">
          <div
            v-for="(item, idx) in education"
            :key="item.id"
            class="timeline-item"
            :class="{ 'timeline-item--last': idx === education.length - 1 }"
          >
            <div class="timeline-marker">
              <div class="timeline-dot timeline-dot--edu"></div>
            </div>
            <div class="timeline-card card">
              <div class="timeline-header">
                <div class="timeline-meta">
                  <h3 class="timeline-role">{{ item.degree }}</h3>
                  <span class="timeline-company">{{ item.institution }}</span>
                </div>
                <span class="timeline-duration badge badge-beige">{{ item.duration }}</span>
              </div>
              <div class="edu-coursework">
                <p class="coursework-label">Relevant coursework</p>
                <div class="coursework-chips">
                  <span v-for="c in item.coursework" :key="c" class="tech-chip">{{ c }}</span>
                </div>
              </div>
              <div v-if="item.thesis" class="edu-thesis">
                <p class="coursework-label">Thesis</p>
                <p class="thesis-text">{{ item.thesis }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { profile, experience, education } from '@/data/data.js'
const DownloadIcon = { template: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>` }
</script>

<style scoped>
.page-hero {
  padding: 64px 0 48px;
  border-bottom: 1px solid var(--border);
}
.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  color: var(--text);
  margin: 4px 0 12px;
}
.page-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.65;
}

/* Timeline */
.timeline {
  position: relative;
}
.timeline-item {
  display: flex;
  gap: 24px;
  padding-bottom: 32px;
  position: relative;
}
.timeline-item--last { padding-bottom: 0; }
.timeline-marker {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
  flex-shrink: 0;
  z-index: 1;
}
.timeline-dot--edu {
  background: var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
}
.timeline-item:not(.timeline-item--last) .timeline-marker::after {
  content: '';
  flex: 1;
  width: 1px;
  background: var(--border);
  margin-top: 8px;
  min-height: 32px;
}
.timeline-card {
  flex: 1;
  padding: 22px 24px;
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
}
.timeline-card:hover {
  transform: translateY(-2px);
}
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.timeline-role {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}
.timeline-company-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.timeline-company {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
}
.timeline-sep { color: var(--text-subtle); font-size: 12px; }
.timeline-location { font-size: 11px; }
.timeline-duration { font-size: 11px; white-space: nowrap; }
.timeline-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 14px;
}
.timeline-achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.timeline-achievement {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}
.achievement-bullet {
  color: var(--accent);
  flex-shrink: 0;
  font-weight: 600;
}
.coursework-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-subtle);
  margin-bottom: 8px;
}
.coursework-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.thesis-text {
  font-size: 14px;
  color: var(--text-muted);
  font-style: italic;
}
.edu-thesis { margin-top: 12px; }

@media (max-width: 600px) {
  .timeline-item { gap: 14px; }
  .timeline-card { padding: 16px 18px; }
  .timeline-header { flex-direction: column; gap: 8px; }
}
</style>