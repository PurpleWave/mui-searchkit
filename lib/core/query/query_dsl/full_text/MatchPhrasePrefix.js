Object.defineProperty(exports, "__esModule", { value: true });
function MatchPhrasePrefix(query, str) {
    var _a;
    if (!query)
        return;
    var tokens = str.split("^");
    var field = tokens[0];
    var boost = Number(tokens[1] || 1);
    return {
        "match_phrase_prefix": (_a = {},
            _a[field] = { query: query, boost: boost },
            _a)
    };
}
exports.MatchPhrasePrefix = MatchPhrasePrefix;
//# sourceMappingURL=MatchPhrasePrefix.js.map