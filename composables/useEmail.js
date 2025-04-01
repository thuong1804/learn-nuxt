// composables/useEmail.ts
export const useEmail = () => {
  const sending = ref(false);
  const error = ref(null);
  const success = ref(false);

  const sendEmail = async (payload) => {
    sending.value = true;
    error.value = null;
    success.value = false;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json()

      if (!result.statusCod === 200) {
        success.value = false
        throw new Error(result.statusText || 'Failed to send email');
      } else {
        success.value = true
        return result;
      }
    } catch (err) {
      error.value = err.message || 'An error occurred';
      throw err;
    } finally {
      sending.value = false;
    }
  };

  return {
    sendEmail,
    sending,
    error,
    success,
  };
};