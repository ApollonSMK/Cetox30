export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    fbq: (
      ...args:
        | ['init', string]
        | ['track', string, object?]
        | ['trackCustom', string, object?]
    ) => void;
  }
}

export const pageview = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/reference
export const event = (name: string, options = {}) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, options);
  }
};
