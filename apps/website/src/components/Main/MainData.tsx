export interface MainData {
  repo: {
    stars?: number | string;
  };
}

export const loadMainData = async (): Promise<MainData> => {
  const repo = await fetch('https://ungh.cc/repos/lyfie-org/codeimage-unlmtd')
    .then(res => res.json())
    .then(res => res.repo)
    .catch(() => ({stars: '?'}));

  return {
    repo,
  };
};
