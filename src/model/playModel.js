const play = {
  title: { value: null, isPersist: true, isMandatory: true },
  author: { value: null, isPersist: true },
  characters: [
    { value: null, isPersist: true },
    { value: null, isPersist: true },
  ],
  intro: { value: null, isPersist: false },
  acts: [
    {
      order: 1,
      title: { value: null, isPersist: true, isMandatory: true },
      scenes: [
        {
          order: 1,
          title: { value: null, isPersist: true, isMandatory: true },
          content: { content: null },
        },
      ],
    },
  ],
};
