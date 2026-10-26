# Design Express वेबसाइट — शुरू करने की गाइड

यह एक मोबाइल-फ्रेंडली static website है। इसमें HTML, CSS, JavaScript, WhatsApp enquiry form, SEO title/meta, structured data, `robots.txt` और `sitemap.xml` शामिल हैं।

## 1. अपने कंप्यूटर पर देखें
1. ZIP फाइल extract करें।
2. `index.html` पर डबल-क्लिक करके ब्राउज़र में खोलें।
3. WhatsApp enquiry बटन टेस्ट करें। फोन/कंप्यूटर में WhatsApp Web या WhatsApp ऐप खुल सकता है।

## 2. वेबसाइट मुफ्त में प्रकाशित करें (GitHub Pages)
1. https://github.com पर अकाउंट बनाएं या लॉग इन करें।
2. एक नया **public repository** बनाएं, उदाहरण: `design-express`.
3. इस प्रोजेक्ट की सभी फाइलें और `assets` फ़ोल्डर repository के root में अपलोड करें।
4. GitHub में **Settings → Pages** खोलें।
5. Build and deployment में **Deploy from a branch** चुनें।
6. Branch `main` और folder `/ (root)` चुनकर Save करें।
7. GitHub आपकी वेबसाइट का URL दिखाएगा, आम तौर पर:
   `https://YOUR-GITHUB-USERNAME.github.io/design-express/`

GitHub Pages की उपलब्धता/सीमाएँ समय के साथ बदल सकती हैं; प्रकाशित करने से पहले GitHub की मौजूदा Pages documentation देखें।

## 3. प्रकाशित करने से पहले जरूरी बदलाव
`index.html`, `robots.txt` और `sitemap.xml` में ये placeholder बदलें:
- `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/`

उदाहरण के लिए, यदि username `javeddesigns` और repository `design-express` है, तो सही URL होगा:
`https://javeddesigns.github.io/design-express/`

`index.html` में canonical URL और `og:url` भी बदलें। `sitemap.xml` और `robots.txt` में भी वही लाइव URL डालें।

## 4. Portfolio को असली बनाएं
Portfolio के 6 visuals अभी **illustrative concepts** हैं, ग्राहक के असली काम की तस्वीरें नहीं। वेबसाइट लाइव करने से पहले:
- अपनी असली designs की अच्छी, साफ images लगाएं।
- ग्राहक की अनुमति के बिना उनका नाम/लोगो प्रकाशित न करें।
- जहाँ संभव हो, image को WebP में export करें और descriptive alt text जोड़ें।
- झूठे testimonials, ratings, awards या experience claims न जोड़ें।

## 5. Google Search के लिए
1. वेबसाइट live होने के बाद Google Search Console में property जोड़ें।
2. `sitemap.xml` submit करें।
3. URL Inspection से homepage indexing request कर सकते हैं; indexing या ranking की गारंटी नहीं होती।
4. यदि आप ग्राहक से मिलने वाली वास्तविक सेवा के लिए योग्य हैं, तो Google Business Profile बनाएं और सही business information दें। नकली पता या नकली business location न डालें।
5. अपने काम के वास्तविक photos और नियमित रूप से उपयोगी service pages जोड़ें।

## 6. ₹0 बजट की बात
GitHub Pages से hosting मुफ्त में शुरू हो सकती है और GitHub subdomain उपयोग कर सकते हैं। Custom `.com` domain मुफ्त नहीं होता; उसे बाद में लेना वैकल्पिक है। Internet/data का खर्च अलग हो सकता है।

## 7. Contact / WhatsApp
WhatsApp contact इस नंबर पर सेट है: `+91 95276 14174`.
वेबसाइट का enquiry form डेटा किसी सर्वर पर save नहीं करता; यह ग्राहक के संदेश के साथ WhatsApp खोलता है। WhatsApp का व्यवहार ग्राहक के डिवाइस/ब्राउज़र पर निर्भर करेगा।

## 8. जरूरी SEO नोट
Schema में business type को `GraphicDesign` रखा गया है, लेकिन Google के rich result नियम बदल सकते हैं। Structured data सिर्फ जानकारी समझने में मदद करता है; यह search ranking या rich result की गारंटी नहीं है। अपना वास्तविक पता, opening hours, email या social links तभी जोड़ें जब वे सही हों।
