const mailsMasivos = (cuerpoMensaje, pdf, imagen, imagen1) => {
  const americanVialImage =
    "https://res.cloudinary.com/dr5okg3aq/image/upload/v1732747550/fkpfe9cz0aiphr9cmcxz.png";
  const PDFUrl =
    "https://res.cloudinary.com/dmfzplfra/image/upload/v1727730981/PDF_b1hsox.png";

  return `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          padding: 20px;
        }
        .email-container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        h3 {
          color: #333333;
        }
        p {
          color: #555555;
          font-size: 16px;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #999999;
        }
        .image-container {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        .product-image {
          width: 40%;
          height: auto;
        }
        .center {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <h3>Mensaje Importante</h3>
        <p>${cuerpoMensaje}</p>
        
        <div class="image-container">
          ${
            imagen
              ? `<img src="${imagen}" alt="Imagen" class="product-image" />`
              : ""
          }
          ${
            imagen1
              ? `<img src="${imagen1}" alt="Imagen Adicional" class="product-image" />`
              : ""
          }
        </div>

        ${
          pdf
            ? `
        <div style="text-align: center; margin: 20px auto;">
          <a href="${pdf}" target="_blank" style="display: inline-block; margin: auto; font-weight: bold;">
            <img src="${PDFUrl}" alt="Descargar PDF" style="width: 80px; height: auto; border: none;" />
            <span style="display: block; font-size: 16px; margin-top: 5px;">Descargar PDF</span>
          </a>
        </div>`
            : ""
        }

        <hr style="margin-top: 30px; margin-bottom: 10px;" />
 <div style="margin-top: 30px; text-align: center;">
  <img src="${americanVialImage}" alt="Firma o American Vial" style="width: 300px; height: auto; display: block; margin: 0 auto;" />
  <a href="http://www.americanagro.com.ar" style="display: inline-block; margin-top: 20px; font-weight: bold;">
    www.americanagro.com.ar
  </a>
</div>
      </div>
    </body>
  </html>
  `;
};

module.exports = mailsMasivos;
