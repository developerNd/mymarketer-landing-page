// Simple Facebook tracking utility
export const trackEvent = async (eventName, userData = {}, customData = {}) => {
  console.log(`🎯 Tracking ${eventName} event:`, { userData, customData });
  
  try {
    const response = await fetch("/api/facebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: `${eventName}_${Date.now()}`,
        user_data: userData,
        custom_data: customData
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.warn('❌ Failed to track event:', result.error);
    } else {
      console.log('✅ Event tracked successfully:', result);
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error tracking event:', error);
  }
};

// Convenience functions for common events
export const trackLead = (userData = {}, customData = {}) => 
  trackEvent('Lead', userData, customData);

export const trackPurchase = (userData = {}, customData = {}) => 
  trackEvent('Purchase', userData, customData);

export const trackViewContent = (userData = {}, customData = {}) => 
  trackEvent('ViewContent', userData, customData);

export const trackAddToCart = (userData = {}, customData = {}) => 
  trackEvent('AddToCart', userData, customData);

export const trackInitiateCheckout = (userData = {}, customData = {}) => 
  trackEvent('InitiateCheckout', userData, customData);

export const trackCompleteRegistration = (userData = {}, customData = {}) => 
  trackEvent('CompleteRegistration', userData, customData);

