const fs = require('fs');
const path = require('path');

function extractTagContent(html, tagName) {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = html.match(pattern);
  return match ? match[1] : '';
}

function extractAttr(htmlTag, attrName) {
  const pattern = new RegExp(`${attrName}=["']([^"']+)["']`, 'i');
  const match = htmlTag.match(pattern);
  return match ? match[1] : '';
}

function loadHtmlPage(fileName) {
  const fullPath = path.join(/* turbopackIgnore: true */ process.cwd(), fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyOpenTagMatch = raw.match(/<body[^>]*>/i);
  const title = extractTagContent(raw, 'title') || 'VIRTUOSIC';
  const metaDescriptionMatch = raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i);

  const bodyHtml = (bodyMatch ? bodyMatch[1] : '')
    .replace(/<script[^>]*src=["']app\.js["'][^>]*><\/script>/gi, '')
    .trim();

  const bodyClass = extractAttr(bodyOpenTagMatch ? bodyOpenTagMatch[0] : '', 'class');

  return {
    title,
    description: metaDescriptionMatch ? metaDescriptionMatch[1] : '',
    bodyHtml,
    bodyClass
  };
}

module.exports = {
  loadHtmlPage
};
