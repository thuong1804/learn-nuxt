export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format;

export const formatTextSlug = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const formatProductSlugDetail = (titleProduct, idProduct) => {
 return `/product/${formatSlugUrl(titleProduct)}-p-${idProduct}`
}

export const formatSlugUrl = (slug) => {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

const getApiUrl = (path) => {
  const config = useRuntimeConfig();
  return `${config.public.API_URL}${path}`;
};

export const apiFetch = async (endpoint, options, method = 'GET') => {
  return $fetch(getApiUrl(endpoint), {
    method: method,
    ...options,
  });
};

export const emailTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Subscribing!</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f7f7f7; margin: 0; padding: 20px; }
    .email-container { max-width: 600px; background: #fff; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .email-header { background: #007bff; color: white; text-align: center; padding: 40px 10px; border-radius: 8px 8px 0 0;}
    .email-body { padding: 20px; }
    .email-footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
    .btn { display: inline-block; background: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px}
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header"><h1 style="font-size: 2.5em">Thank You for Subscribing! 🎉</h1></div>
    <div class="email-body">
      <p>Hi {{name}},</p>
      <p>Thank you for subscribing to our new product notifications! 🚀</p>
      <p>You'll be the first to know when we have exciting new products in stock.</p>
      <p>Stay tuned and happy shopping! 🛒</p>
      <a href="{{store_link}}" class="btn" target="_blank">
        <div style="color: #fff">Visit Our Store</div>
      </a>
    </div>
    <div class="email-footer">&copy; 2025 Your E-Commerce Store. All Rights Reserved.</div>
  </div>
</body>
</html>`;

export const emailTemplateVerify = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f7f7f7; margin: 0; padding: 20px; }
    .email-container { max-width: 600px; background: #fff; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .email-header { background: #007bff; color: white; text-align: center; padding: 40px 10px; border-radius: 8px 8px 0 0;}
    .email-body { padding: 20px; }
    .email-footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
    .btn { display: inline-block; background: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px}
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 style="font-size: 2.2em">Verify Your Email Address ✉️</h1>
    </div>
    <div class="email-body">
      <p>Hi {{name}},</p>
      <p>Thank you for registering with us! To complete your registration, please verify your email address by clicking the button below:</p>
      <a href="{{verify_link}}" class="btn" target="_blank">
        <div style="color: #fff;">Verify Email</div>
      </a>
      <p>If you didn’t create an account, you can safely ignore this email.</p>
      <p>Thank you,<br/>The {{store_name}} Team</p>
    </div>
    <div class="email-footer">
      &copy; 2025 {{store_name}}. All Rights Reserved.
    </div>
  </div>
</body>
</html>`;

