let time = 0;

const imageUploadService = (interval: NodeJS.Timeout) => {
  time++;
  if (time > 50) {
    console.log("upload done");
    return clearInterval(interval);
  }
  return Promise.resolve((time / 50) * 100 + "% is uploaded");
};

export const imageUploadSocket = () =>
  Promise.resolve(() => {
    const res = {
      upload: () => {
        console.log("upload started");
        const interval = setInterval(async () => {
          const res = await imageUploadService(interval);
          console.log(res);
        }, 100);

        return interval;
      },
    };
    return res;
  });
