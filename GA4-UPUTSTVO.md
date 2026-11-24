# GA4 integracija

U `index.html`, neposredno pre `</head>`, uneti sledeći kod tek nakon što vlasnik projekta kreira GA4 property i dobije stvarni Measurement ID. Ne koristiti izmišljenu statistiku.

```html
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-UNETI_STVARNI_ID"
></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-UNETI_STVARNI_ID");
</script>
```

Dokaz za dokumentaciju: snimak ekrana GA4 Realtime izveštaja sa otvorenim javnim sajtom. Ova stavka ostaje za vlasnika naloga.
