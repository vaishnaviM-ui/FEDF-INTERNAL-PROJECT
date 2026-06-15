const certificateService = {

  canDownload(id) {

    return (
      localStorage.getItem(
        `courseCompleted_${id}`
      ) === "true"
    );
  }
};

export default certificateService;