
export const photoUpload = async (file:File) => {
    const formData = new FormData();
    formData.append('key', process.env.NEXT_PUBLIC_IMGBB_URL as string);
    formData.append('image', file);
  
    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const data = await response.json();
      return data?.data?.image?.url;
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
};