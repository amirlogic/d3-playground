module.exports = {
    async headers() {
      return [
        {
          source: '/api/svg',
          headers: [
            {
              key: 'Content-Disposition',
              value: 'attachment; filename="vector.svg"',
            },
            
          ],
        },
      ];
    },
  };
  