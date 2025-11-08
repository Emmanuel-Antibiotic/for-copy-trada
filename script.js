// Data
const POSTS = [
    {
        id: 1,
        username: "ForexPro",
        category: "Forex",
        postType: "Signal",
        title: "EUR/USD Long Signal - Strong Breakout Expected",
        content: "Technical analysis shows a bullish pattern forming on the 4H chart. Entry at 1.0850, targeting 1.0920 with a stop loss at 1.0820. Risk-reward ratio of 1:2.3 makes this an attractive setup...",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        time: "2 hours ago",
        likes: 234,
        comments: 45,
    },
    {
        id: 2,
        username: "BetExpert",
        category: "Sports",
        postType: "Prediction",
        title: "Lakers vs Warriors - Monday Night Prediction",
        content: "Lakers looking strong at home with a 12-3 record. Warriors dealing with injuries to key players. Expecting Lakers to cover the -5.5 spread. Home court advantage and recent form favor LA...",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
        time: "3 hours ago",
        likes: 189,
        comments: 67,
    },
    {
        id: 3,
        username: "StockMaster",
        category: "Stocks",
        postType: "Market Tip",
        title: "Tech Stocks Rally - NVIDIA and AMD Leading Gains",
        content: "NVIDIA up 8% this week on strong AI chip demand. AMD following with 6% gains. Semiconductor sector showing momentum as data center spending increases. Consider positions in SMH ETF for diversified exposure...",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        time: "5 hours ago",
        likes: 342,
        comments: 89,
    },
    {
        id: 4,
        username: "CryptoKing",
        category: "Crypto",
        postType: "Insight",
        title: "Bitcoin Breaks $65K - Altcoin Season Incoming?",
        content: "BTC showing strength above $65K resistance. Ethereum gaining momentum at $3,200. Market sentiment turning bullish. Watch for altcoin rotation - SOL, AVAX, and LINK showing accumulation patterns...",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
        time: "6 hours ago",
        likes: 421,
        comments: 123,
    },
    {
        id: 5,
        username: "TradeWizard",
        category: "Forex",
        postType: "Signal",
        title: "GBP/JPY Short Setup - Overbought on Daily",
        content: "Seeing exhaustion signals on GBP/JPY after the recent rally. RSI divergence on daily chart. Looking to short at 195.50 with targets at 193.20. Position sizing at 2% risk per trade...",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
        time: "8 hours ago",
        likes: 287,
        comments: 56,
    },
    {
        id: 6,
        username: "DeFiGuru",
        category: "Crypto",
        postType: "Insight",
        title: "DeFi Protocols Seeing Massive TVL Growth",
        content: "Total Value Locked in DeFi surpassing $100B again. Uniswap and Aave leading with strong volume. New opportunities in liquid staking derivatives. LIDO and Rocket Pool tokens showing strength...",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
        time: "10 hours ago",
        likes: 398,
        comments: 91,
    },
];

const LEADERBOARD = [
    { rank: 1, username: "DeFiGuru", category: "Crypto", profit: 156.4, followers: 18900 },
    { rank: 2, username: "CryptoKing", category: "Crypto", profit: 142.5, followers: 12400 },
    { rank: 3, username: "TradeWizard", category: "Forex", profit: 98.6, followers: 10300 },
    { rank: 4, username: "ForexPro", category: "Forex", profit: 89.3, followers: 8900 },
    { rank: 5, username: "StockMaster", category: "Stocks", profit: 67.8, followers: 15200 },
];

// Helper Functions
function getCategoryClass(category) {
    const categories = {
        'Crypto': 'category-crypto',
        'Forex': 'category-forex',
        'Stocks': 'category-stocks',
        'Sports': 'category-sports',
    };
    return categories[category] || 'category-forex';
}

function formatNumber(num) {
    return (num / 1000).toFixed(1) + 'k';
}

function getInitials(username) {
    return username.slice(0, 2).toUpperCase();
}

function getTrophyIcon(rank) {
    const trophies = {
        1: '<svg class="w-5 h-5 trophy-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        2: '<svg class="w-5 h-5 trophy-silver" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        3: '<svg class="w-5 h-5 trophy-bronze" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    };
    return trophies[rank] || '';
}

// Render Posts
function renderPosts() {
    const container = document.getElementById('posts-container');
    
    const postsHTML = POSTS.map(post => `
        <div class="post-card">
            <!-- Image -->
            <div class="relative">
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="absolute top-3 right-3">
                    <span class="category-badge ${getCategoryClass(post.category)}">${post.category}</span>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-5">
                <!-- Header -->
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="avatar-initials">${getInitials(post.username)}</div>
                        <div>
                            <div class="text-slate-900 text-sm font-semibold">${post.username}</div>
                            <div class="text-slate-500 text-xs">${post.postType}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1 text-slate-500 text-xs">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${post.time}</span>
                    </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    ${post.title}
                </h3>
                
                <!-- Preview Content -->
                <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                    ${post.content}
                </p>
                
                <!-- Footer -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div class="flex items-center gap-4 text-slate-500">
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span class="text-sm">${post.likes}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <span class="text-sm">${post.comments}</span>
                        </div>
                    </div>
                    <button class="text-blue-600 hover:text-blue-700 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                        Read More →
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = postsHTML;
}

// Render Leaderboard
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    
    const leaderboardHTML = LEADERBOARD.map(trader => `
        <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                    ${getTrophyIcon(trader.rank)}
                    <span class="text-slate-900 font-medium">#${trader.rank}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="text-slate-900 font-semibold">${trader.username}</span>
            </td>
            <td class="px-6 py-4">
                <span class="category-badge ${getCategoryClass(trader.category)}">${trader.category}</span>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center gap-1 text-emerald-600 font-semibold">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    <span>+${trader.profit}%</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center gap-1 text-slate-600">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <span>${formatNumber(trader.followers)}</span>
                </div>
            </td>
        </tr>
    `).join('');
    
    tbody.innerHTML = leaderboardHTML;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    renderLeaderboard();
});
