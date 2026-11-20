const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F17"/>
      <stop offset="50%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#05070A"/>
    </linearGradient>
    <radialGradient id="yellowGlow" cx="85%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#FFD633" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#FFD633" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blueGlow" cx="15%" cy="80%" r="55%">
      <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#60A5FA" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" stroke-width="0.5" stroke-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#yellowGlow)"/>
  <rect width="1200" height="630" fill="url(#blueGlow)"/>

  <!-- Outer Border Frame -->
  <rect x="28" y="28" width="1144" height="574" rx="24" fill="none" stroke="#FFD633" stroke-width="2" stroke-opacity="0.5"/>

  <!-- Header Badge -->
  <g transform="translate(80, 75)">
    <rect width="300" height="46" rx="12" fill="#FFD633" stroke="#000000" stroke-width="2"/>
    <text x="150" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="900" fill="#0A0A0A" text-anchor="middle" letter-spacing="2">FULL STACK DEV STUDIO</text>
  </g>

  <!-- Location Pill -->
  <g transform="translate(400, 75)">
    <rect width="210" height="46" rx="12" fill="#1F2937" stroke="#374151" stroke-width="1.5"/>
    <circle cx="28" cy="23" r="6" fill="#4ADE80"/>
    <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#E5E7EB" text-anchor="middle">Kolkata, India</text>
  </g>

  <!-- Brand Name -->
  <text x="80" y="225" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="88" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
    3buddy<tspan fill="#FFD633">.</tspan>
  </text>

  <!-- Tagline / Value Proposition -->
  <text x="80" y="285" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="32" font-weight="700" fill="#F3F4F6">
    We build digital experiences that solve real problems.
  </text>
  <text x="80" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="400" fill="#9CA3AF">
    High-performance web apps, scalable APIs, SaaS products &amp; custom software architectures.
  </text>

  <!-- Tech Highlights -->
  <g transform="translate(80, 375)">
    <rect x="0" y="0" width="125" height="40" rx="8" fill="#111827" stroke="#FFD633" stroke-width="1.5"/>
    <text x="62" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#FFD633" text-anchor="middle">Next.js 16</text>

    <rect x="140" y="0" width="115" height="40" rx="8" fill="#111827" stroke="#60A5FA" stroke-width="1.5"/>
    <text x="197" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#60A5FA" text-anchor="middle">React 19</text>

    <rect x="270" y="0" width="135" height="40" rx="8" fill="#111827" stroke="#4ADE80" stroke-width="1.5"/>
    <text x="337" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#4ADE80" text-anchor="middle">Node &amp; APIs</text>

    <rect x="420" y="0" width="125" height="40" rx="8" fill="#111827" stroke="#F472B6" stroke-width="1.5"/>
    <text x="482" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#F472B6" text-anchor="middle">Tailwind 4</text>

    <rect x="560" y="0" width="135" height="40" rx="8" fill="#111827" stroke="#A78BFA" stroke-width="1.5"/>
    <text x="627" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#A78BFA" text-anchor="middle">SaaS &amp; DApps</text>
  </g>

  <!-- Team Member Cards Bar -->
  <g transform="translate(80, 465)">
    <rect width="1040" height="85" rx="16" fill="#111827" stroke="#374151" stroke-width="1"/>
    
    <!-- Member 1 -->
    <circle cx="45" cy="42" r="22" fill="#FFD633"/>
    <text x="45" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#000" text-anchor="middle">SM</text>
    <text x="80" y="37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Soumen Maji</text>
    <text x="80" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#9CA3AF">Full Stack Developer</text>

    <line x1="260" y1="20" x2="260" y2="65" stroke="#374151" stroke-width="1"/>

    <!-- Member 2 -->
    <circle cx="305" cy="42" r="22" fill="#4ADE80"/>
    <text x="305" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#000" text-anchor="middle">AK</text>
    <text x="340" y="37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Abhijit Kayal</text>
    <text x="340" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#9CA3AF">Software Developer (SDE)</text>

    <line x1="535" y1="20" x2="535" y2="65" stroke="#374151" stroke-width="1"/>

    <!-- Member 3 -->
    <circle cx="580" cy="42" r="22" fill="#60A5FA"/>
    <text x="580" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#000" text-anchor="middle">SR</text>
    <text x="615" y="37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Shivam Kumar Rai</text>
    <text x="615" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#9CA3AF">Software Developer (SDE)</text>

    <!-- Domain link -->
    <text x="1000" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="800" fill="#FFD633" text-anchor="end">3buddy.me</text>
  </g>
</svg>
`;

const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#iconBg)"/>
  <rect x="20" y="20" width="472" height="472" rx="96" fill="none" stroke="#FFD633" stroke-width="10" stroke-opacity="0.6"/>
  <text x="256" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="210" font-weight="900" fill="#FFD633" text-anchor="middle">3B</text>
  <circle cx="400" cy="120" r="28" fill="#4ADE80" stroke="#0F172A" stroke-width="6"/>
</svg>
`;

async function main() {
  await sharp(Buffer.from(ogSvg)).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('✓ Generated public/og-image.png (1200x630)');

  const iconBuffer = Buffer.from(iconSvg);
  await sharp(iconBuffer).png().resize(512, 512).toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Generated public/icon-512.png');

  await sharp(iconBuffer).png().resize(192, 192).toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Generated public/icon-192.png');

  await sharp(iconBuffer).png().resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Generated public/apple-touch-icon.png');

  fs.writeFileSync(path.join(publicDir, 'icon.svg'), iconSvg.trim());
  console.log('✓ Generated public/icon.svg');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
