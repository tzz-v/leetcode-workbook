function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  enum RuleEnum {'type', 'color', 'name'};
  return items.filter((item) => item[RuleEnum[ruleKey]] === ruleValue).length;
};