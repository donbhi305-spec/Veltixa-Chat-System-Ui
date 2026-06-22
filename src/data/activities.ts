import { Category } from '../types';

export const SYSTEM_CATEGORIES: Category[] = [
  {
    id: 'MAIN_ENTRY',
    name: 'Main Entry',
    activities: [
      { id: 'SplashActivity', name: 'SplashActivity', category: 'MAIN_ENTRY', description: 'Opening screen displaying node booting and loading sequences.' },
      { id: 'WelcomeActivity', name: 'WelcomeActivity', category: 'MAIN_ENTRY', description: 'Interactive portal interface welcoming user to the network.' },
      { id: 'OnboardingActivity', name: 'OnboardingActivity', category: 'MAIN_ENTRY', description: 'Interactive tutorial with security checks and parameter setups.' },
      { id: 'MainActivity', name: 'MainActivity', category: 'MAIN_ENTRY', description: 'Central App Root & Navigation Controller with shortcut configurations.' }
    ]
  },
  {
    id: 'AUTHENTICATION',
    name: 'Authentication',
    activities: [
      { id: 'LoginActivity', name: 'LoginActivity', category: 'AUTHENTICATION', description: 'Secure neural key verification with biometric options.' },
      { id: 'RegisterActivity', name: 'RegisterActivity', category: 'AUTHENTICATION', description: 'Establish a new identity contract on the network.' },
      { id: 'ForgotPasswordActivity', name: 'ForgotPasswordActivity', category: 'AUTHENTICATION', description: 'Initiate account credential recovery protocols.' },
      { id: 'ResetPasswordActivity', name: 'ResetPasswordActivity', category: 'AUTHENTICATION', description: 'Update authorization keys after successful recovery.' },
      { id: 'VerifyEmailActivity', name: 'VerifyEmailActivity', category: 'AUTHENTICATION', description: 'Confirm communication frequency registry via secure link.' },
      { id: 'VerifyPhoneActivity', name: 'VerifyPhoneActivity', category: 'AUTHENTICATION', description: 'Two-step hardware signature verification.' },
      { id: 'TwoFactorActivity', name: 'TwoFactorActivity', category: 'AUTHENTICATION', description: 'Time-based OTP authorization code entry.' },
      { id: 'PasskeyActivity', name: 'PasskeyActivity', category: 'AUTHENTICATION', description: 'Hardware cryptokey authentications.' },
      { id: 'RecoveryCodesActivity', name: 'RecoveryCodesActivity', category: 'AUTHENTICATION', description: 'Generate back-up hashes for manual node override.' },
      { id: 'AccountRecoveryActivity', name: 'AccountRecoveryActivity', category: 'AUTHENTICATION', description: 'Initiate structural escrow recovery for identity loss.' },
      { id: 'DeviceVerificationActivity', name: 'DeviceVerificationActivity', category: 'AUTHENTICATION', description: 'Authorize node linkages for secondary terminals.' }
    ]
  },
  {
    id: 'CORE_NAVIGATION',
    name: 'Core Navigation',
    activities: [
      { id: 'HomeActivity', name: 'HomeActivity', category: 'CORE_NAVIGATION', description: 'Spectacular main OS dashboard with active alert feeds and sensor grids.' },
      { id: 'ExploreActivity', name: 'ExploreActivity', category: 'CORE_NAVIGATION', description: 'Planet & subnet explorer for active node groups and directories.' },
      { id: 'SearchActivity', name: 'SearchActivity', category: 'CORE_NAVIGATION', description: 'Comprehensive live search console across registered nodes and chatter journals.' },
      { id: 'NotificationsActivity', name: 'NotificationsActivity', category: 'CORE_NAVIGATION', description: 'Main notification hub with quick mark-read filters.' },
      { id: 'ActivityFeedActivity', name: 'ActivityFeedActivity', category: 'CORE_NAVIGATION', description: 'Chronological telemetry timeline of system actions and handshakes.' },
      { id: 'BookmarkActivity', name: 'BookmarkActivity', category: 'CORE_NAVIGATION', description: 'Node favorites and pinned chatter journals registry.' },
      { id: 'HistoryActivity', name: 'HistoryActivity', category: 'CORE_NAVIGATION', description: 'Historical ledger of nodes pinged, diagnostics, and system cycles.' }
    ]
  },
  {
    id: 'USER',
    name: 'User',
    activities: [
      { id: 'ProfileActivity', name: 'ProfileActivity', category: 'USER', description: 'General node status and personal parameter logs.' },
      { id: 'EditProfileActivity', name: 'EditProfileActivity', category: 'USER', description: 'Update biometric labels, name handles, and locations.' },
      { id: 'PublicProfileActivity', name: 'PublicProfileActivity', category: 'USER', description: 'Public facing node details visible to other explorers.' },
      { id: 'AvatarEditorActivity', name: 'AvatarEditorActivity', category: 'USER', description: 'Synthesize core portrait image and accent glow matrix.' },
      { id: 'CoverEditorActivity', name: 'CoverEditorActivity', category: 'USER', description: 'Configure grid background banner and overlay visuals.' },
      { id: 'BioEditorActivity', name: 'BioEditorActivity', category: 'USER', description: 'Craft status text lines and metadata tags.' },
      { id: 'UsernameHistoryActivity', name: 'UsernameHistoryActivity', category: 'USER', description: 'Review prior ledger usernames and timestamp hashes.' },
      { id: 'ReputationActivity', name: 'ReputationActivity', category: 'USER', description: 'System-wide social capital and network reliability meter.' },
      { id: 'AchievementsActivity', name: 'AchievementsActivity', category: 'USER', description: 'Inspect unlocked milestones and developer badges.' },
      { id: 'BadgesActivity', name: 'BadgesActivity', category: 'USER', description: 'Manage illuminated decorations on public profile.' },
      { id: 'ActivityHistoryActivity', name: 'ActivityHistoryActivity', category: 'USER', description: 'Historical ledger of nodes pinged and links created.' },
      { id: 'FollowersActivity', name: 'FollowersActivity', category: 'USER', description: 'List of entities tracking this node.' },
      { id: 'FollowingActivity', name: 'FollowingActivity', category: 'USER', description: 'Entities this node is subscribing to.' },
      { id: 'MutualFriendsActivity', name: 'MutualFriendsActivity', category: 'USER', description: 'Symmetrical peer lists on mutual registries.' },
      { id: 'UserGalleryActivity', name: 'UserGalleryActivity', category: 'USER', description: 'Inspect personal collections and custom media snapshots.' }
    ]
  },
  {
    id: 'SOCIAL',
    name: 'Social',
    activities: [
      { id: 'FriendsActivity', name: 'FriendsActivity', category: 'SOCIAL', description: 'Browse and manage high-priority network connections.' },
      { id: 'AddFriendActivity', name: 'AddFriendActivity', category: 'SOCIAL', description: 'Scan QR registries or type link addresses.' },
      { id: 'FriendRequestsActivity', name: 'FriendRequestsActivity', category: 'SOCIAL', description: 'Pending connection invitations requesting peer handshake.' },
      { id: 'BlockedUsersActivity', name: 'BlockedUsersActivity', category: 'SOCIAL', description: 'Quarantined nodes restricted from link interactions.' },
      { id: 'MutedUsersActivity', name: 'MutedUsersActivity', category: 'SOCIAL', description: 'Suppressed streams excluded from dashboard feeds.' },
      { id: 'UserSearchActivity', name: 'UserSearchActivity', category: 'SOCIAL', description: 'Find registered explorers inside planetary ledger.' },
      { id: 'NearbyUsersActivity', name: 'NearbyUsersActivity', category: 'SOCIAL', description: 'Discover adjacent nodes using proximity telemetry.' },
      { id: 'InvitationsActivity', name: 'InvitationsActivity', category: 'SOCIAL', description: 'Event keys and room invitations logs.' },
      { id: 'ReferralsActivity', name: 'ReferralsActivity', category: 'SOCIAL', description: 'Share activation codes and unlock bonus structures.' },
      { id: 'SocialFeedActivity', name: 'SocialFeedActivity', category: 'SOCIAL', description: 'Chronological telemetry updates from your connections.' }
    ]
  },
  {
    id: 'CHAT',
    name: 'Chat',
    activities: [
      { id: 'ChatListActivity', name: 'ChatListActivity', category: 'CHAT', description: 'Active secure messaging pipelines list.' },
      { id: 'ChatActivity', name: 'ChatActivity', category: 'CHAT', description: 'Encrypted message channel with typing visualizers.' },
      { id: 'NewChatActivity', name: 'NewChatActivity', category: 'CHAT', description: 'Initialize secure p2p communication pipe.' },
      { id: 'ChatSearchActivity', name: 'ChatSearchActivity', category: 'CHAT', description: 'Scan messages or file attachments inside pipelines.' },
      { id: 'ChatInfoActivity', name: 'ChatInfoActivity', category: 'CHAT', description: 'View encryption keys, group rosters, and guidelines.' },
      { id: 'PinnedMessagesActivity', name: 'PinnedMessagesActivity', category: 'CHAT', description: 'Anchored instructions and high priority announcements.' },
      { id: 'StarredMessagesActivity', name: 'StarredMessagesActivity', category: 'CHAT', description: 'Starred communication segments catalog.' },
      { id: 'DraftMessagesActivity', name: 'DraftMessagesActivity', category: 'CHAT', description: 'Unsent draft templates awaiting signature.' },
      { id: 'ScheduledMessagesActivity', name: 'ScheduledMessagesActivity', category: 'CHAT', description: 'Queued transmissions set for future epochs.' },
      { id: 'SharedMediaActivity', name: 'SharedMediaActivity', category: 'CHAT', description: 'View mutual visual assets in chronological order.' },
      { id: 'SharedFilesActivity', name: 'SharedFilesActivity', category: 'CHAT', description: 'Mutual document files and archive libraries.' },
      { id: 'SharedLinksActivity', name: 'SharedLinksActivity', category: 'CHAT', description: 'Mutual address links shared across this channel.' },
      { id: 'PollsActivity', name: 'PollsActivity', category: 'CHAT', description: 'Peer telemetry collections and demographic voting.' },
      { id: 'StickersActivity', name: 'StickersActivity', category: 'CHAT', description: 'Synthesized graphical reactions and stamp catalogs.' },
      { id: 'GIFPickerActivity', name: 'GIFPickerActivity', category: 'CHAT', description: 'Animated visual data snippets directory.' },
      { id: 'VoiceMessagesActivity', name: 'VoiceMessagesActivity', category: 'CHAT', description: 'Audio wave entries and speech transcribers.' },
      { id: 'ChatBackupActivity', name: 'ChatBackupActivity', category: 'CHAT', description: 'Export encryptions archives to safe terminal disks.' }
    ]
  },
  {
    id: 'AI',
    name: 'AI Companion',
    activities: [
      { id: 'AIChatActivity', name: 'AIChatActivity', category: 'AI', description: 'Active dialogue with the system core cognitive model.' },
      { id: 'AIModelsActivity', name: 'AIModelsActivity', category: 'AI', description: 'Browse and switch neural cog algorithms.' },
      { id: 'AISettingsActivity', name: 'AISettingsActivity', category: 'AI', description: 'Formulate temperature rates, context margins, and system roles.' },
      { id: 'AIAgentsActivity', name: 'AIAgentsActivity', category: 'AI', description: 'Roster of specialized cognitive nodes at your command.' },
      { id: 'AgentBuilderActivity', name: 'AgentBuilderActivity', category: 'AI', description: 'Construct and program specialized agent workflows.' },
      { id: 'AgentMarketplaceActivity', name: 'AgentMarketplaceActivity', category: 'AI', description: 'Acquire custom model files and cognitive skillsets.' },
      { id: 'CharacterCreatorActivity', name: 'CharacterCreatorActivity', category: 'AI', description: 'Generate custom AI avatars with unique personas.' },
      { id: 'CharacterEditorActivity', name: 'CharacterEditorActivity', category: 'AI', description: 'Fine-tune personality traits and memory biases.' },
      { id: 'CharacterMarketplaceActivity', name: 'CharacterMarketplaceActivity', category: 'AI', description: 'Roster of public model personalities.' },
      { id: 'PromptLibraryActivity', name: 'PromptLibraryActivity', category: 'AI', description: 'Store, search, and manage instruction templates.' },
      { id: 'PromptEditorActivity', name: 'PromptEditorActivity', category: 'AI', description: 'Refine system tokens, variables, and prefix strings.' },
      { id: 'WorkflowBuilderActivity', name: 'WorkflowBuilderActivity', category: 'AI', description: 'Design sequential reasoning chains.' },
      { id: 'MemoryManagerActivity', name: 'MemoryManagerActivity', category: 'AI', description: 'Inspect persistent cognitive facts and factual graphs.' },
      { id: 'AITrainingActivity', name: 'AITrainingActivity', category: 'AI', description: 'Manage training iterations, learning curves, and epoch counts.' },
      { id: 'DatasetManagerActivity', name: 'DatasetManagerActivity', category: 'AI', description: 'Clean or ingest training vectors and reference files.' },
      { id: 'VoiceAIActivity', name: 'VoiceAIActivity', category: 'AI', description: 'Voice synthesizer matrix and custom tone selectors.' },
      { id: 'VisionAIActivity', name: 'VisionAIActivity', category: 'AI', description: 'Optical spatial feedback and telemetry labels.' },
      { id: 'ImageGenerationActivity', name: 'ImageGenerationActivity', category: 'AI', description: 'Synthesize images using neural prompt weights.' },
      { id: 'VideoGenerationActivity', name: 'VideoGenerationActivity', category: 'AI', description: 'Generate dynamic animation arrays.' },
      { id: 'MusicGenerationActivity', name: 'MusicGenerationActivity', category: 'AI', description: 'Generate ambient themes and custom synthesizer loops.' },
      { id: 'AIAnalyticsActivity', name: 'AIAnalyticsActivity', category: 'AI', description: 'Token usage plots, processing latencies, and accuracy vectors.' }
    ]
  },
  {
    id: 'GROUPS',
    name: 'Groups',
    activities: [
      { id: 'GroupsActivity', name: 'GroupsActivity', category: 'GROUPS', description: 'Browse and join cluster pipelines.' },
      { id: 'CreateGroupActivity', name: 'CreateGroupActivity', category: 'GROUPS', description: 'Initialize group channels and set access codes.' },
      { id: 'GroupChatActivity', name: 'GroupChatActivity', category: 'GROUPS', description: 'Multi-node live communication console.' },
      { id: 'GroupInfoActivity', name: 'GroupInfoActivity', category: 'GROUPS', description: 'View membership rosters, pins, and descriptions.' },
      { id: 'GroupMembersActivity', name: 'GroupMembersActivity', category: 'GROUPS', description: 'Roster of interconnected entities in this group.' },
      { id: 'GroupRolesActivity', name: 'GroupRolesActivity', category: 'GROUPS', description: 'Configure permission tags (Mod, Admin, Builder).' },
      { id: 'GroupAdminsActivity', name: 'GroupAdminsActivity', category: 'GROUPS', description: 'Roster of managing authorities.' },
      { id: 'GroupInviteActivity', name: 'GroupInviteActivity', category: 'GROUPS', description: 'Generate node invites and expiration tickers.' },
      { id: 'JoinRequestsActivity', name: 'JoinRequestsActivity', category: 'GROUPS', description: 'Review screening entries waiting for admission.' },
      { id: 'GroupMediaActivity', name: 'GroupMediaActivity', category: 'GROUPS', description: 'Group dashboard for images, videos, and music.' },
      { id: 'GroupFilesActivity', name: 'GroupFilesActivity', category: 'GROUPS', description: 'Shared repositories panel for structural documents.' },
      { id: 'GroupAnalyticsActivity', name: 'GroupAnalyticsActivity', category: 'GROUPS', description: 'Activity graphs, peak hours, and message counts.' },
      { id: 'GroupSettingsActivity', name: 'GroupSettingsActivity', category: 'GROUPS', description: 'Mute, restriction, and link rules configuration.' }
    ]
  },
  {
    id: 'COMMUNITIES',
    name: 'Communities',
    activities: [
      { id: 'CommunitiesActivity', name: 'CommunitiesActivity', category: 'COMMUNITIES', description: 'Explore planetary communities.' },
      { id: 'CreateCommunityActivity', name: 'CreateCommunityActivity', category: 'COMMUNITIES', description: 'Launch a new forum system for massive social grids.' },
      { id: 'CommunityActivity', name: 'CommunityActivity', category: 'COMMUNITIES', description: 'Explore community hubs with multiple text clusters.' },
      { id: 'CommunityMembersActivity', name: 'CommunityMembersActivity', category: 'COMMUNITIES', description: 'Browse millions of registered forum nodes.' },
      { id: 'CommunityEventsActivity', name: 'CommunityEventsActivity', category: 'COMMUNITIES', description: 'View active hackathons, streams, or community events.' },
      { id: 'CommunityRulesActivity', name: 'CommunityRulesActivity', category: 'COMMUNITIES', description: 'Guidelines for appropriate behavior within this zone.' },
      { id: 'CommunityModerationActivity', name: 'CommunityModerationActivity', category: 'COMMUNITIES', description: 'Incident reports, user reports, and moderation history.' },
      { id: 'CommunityRolesActivity', name: 'CommunityRolesActivity', category: 'COMMUNITIES', description: 'Configure tags and public achievements for contributors.' },
      { id: 'CommunityAnalyticsActivity', name: 'CommunityAnalyticsActivity', category: 'COMMUNITIES', description: 'Visual charts on engagement index and member growth.' },
      { id: 'CommunitySettingsActivity', name: 'CommunitySettingsActivity', category: 'COMMUNITIES', description: 'Custom thematic accent colors and access permissions.' }
    ]
  },
  {
    id: 'MEDIA',
    name: 'Media',
    activities: [
      { id: 'GalleryActivity', name: 'GalleryActivity', category: 'MEDIA', description: 'Browse combined layout of images, videos, and files.' },
      { id: 'PhotosActivity', name: 'PhotosActivity', category: 'MEDIA', description: 'High-contrast photographs grid.' },
      { id: 'VideosActivity', name: 'VideosActivity', category: 'MEDIA', description: 'Video libraries and custom player loops.' },
      { id: 'AudioActivity', name: 'AudioActivity', category: 'MEDIA', description: 'Sound directories and playlist trackers.' },
      { id: 'FilesActivity', name: 'FilesActivity', category: 'MEDIA', description: 'System-wide storage and explorer.' },
      { id: 'DownloadsActivity', name: 'DownloadsActivity', category: 'MEDIA', description: 'Active downloads queues with ETA indicators.' },
      { id: 'FavoritesActivity', name: 'FavoritesActivity', category: 'MEDIA', description: 'Bookmarked records and high value uploads.' },
      { id: 'CollectionsActivity', name: 'CollectionsActivity', category: 'MEDIA', description: 'Group shared nodes into folders.' },
      { id: 'PDFViewerActivity', name: 'PDFViewerActivity', category: 'MEDIA', description: 'Simulated documentation reader.' },
      { id: 'VideoPlayerActivity', name: 'VideoPlayerActivity', category: 'MEDIA', description: 'High resolution cyber video terminal.' },
      { id: 'AudioPlayerActivity', name: 'AudioPlayerActivity', category: 'MEDIA', description: 'Futuristic ambient music player with soundwaves.' },
      { id: 'ImageEditorActivity', name: 'ImageEditorActivity', category: 'MEDIA', description: 'Modify assets with lighting filters and text overlays.' },
      { id: 'CloudStorageActivity', name: 'CloudStorageActivity', category: 'MEDIA', description: 'Inspect available decentralized cloud storage quotas.' },
      { id: 'MediaManagerActivity', name: 'MediaManagerActivity', category: 'MEDIA', description: 'Perform file optimization, compression, and deduplication.' }
    ]
  },
  {
    id: 'CALLS',
    name: 'Calls & Comms',
    activities: [
      { id: 'CallsActivity', name: 'CallsActivity', category: 'CALLS', description: 'Manage direct voice and video connection lines.' },
      { id: 'VoiceCallActivity', name: 'VoiceCallActivity', category: 'CALLS', description: 'Encrypted call with active sound spectrums.' },
      { id: 'VideoCallActivity', name: 'VideoCallActivity', category: 'CALLS', description: 'Futuristic live stream webcam overlay.' },
      { id: 'IncomingCallActivity', name: 'IncomingCallActivity', category: 'CALLS', description: 'Incoming handshake requesting audio/video sync.' },
      { id: 'OutgoingCallActivity', name: 'OutgoingCallActivity', category: 'CALLS', description: 'Broadcasting link signals to external peer.' },
      { id: 'CallHistoryActivity', name: 'CallHistoryActivity', category: 'CALLS', description: 'Ledger of past connections, missed, and incoming calls.' },
      { id: 'ConferenceCallActivity', name: 'ConferenceCallActivity', category: 'CALLS', description: 'Multi-node live video grids.' },
      { id: 'ScreenShareActivity', name: 'ScreenShareActivity', category: 'CALLS', description: 'Stream spatial feed from personal screen.' },
      { id: 'CallRecordingActivity', name: 'CallRecordingActivity', category: 'CALLS', description: 'Review saved audio communications archives.' },
      { id: 'CallSettingsActivity', name: 'CallSettingsActivity', category: 'CALLS', description: 'Configure speaker systems and hardware inputs.' }
    ]
  },
  {
    id: 'STREAMING',
    name: 'Streaming',
    activities: [
      { id: 'LiveStreamsActivity', name: 'LiveStreamsActivity', category: 'STREAMING', description: 'Browse active transmissions across the node index.' },
      { id: 'StartStreamActivity', name: 'StartStreamActivity', category: 'STREAMING', description: 'Setup live stream credentials, titles, and tags.' },
      { id: 'StreamChatActivity', name: 'StreamChatActivity', category: 'STREAMING', description: 'High-speed scrolling chat feed with custom badges.' },
      { id: 'StreamAnalyticsActivity', name: 'StreamAnalyticsActivity', category: 'STREAMING', description: 'Track peak concurrent viewers, stream health, and pings.' },
      { id: 'ClipsActivity', name: 'ClipsActivity', category: 'STREAMING', description: 'List of captured short highlights from live streams.' },
      { id: 'StreamScheduleActivity', name: 'StreamScheduleActivity', category: 'STREAMING', description: 'Calendar of upcoming broadcasts and streams.' },
      { id: 'CreatorDashboardActivity', name: 'CreatorDashboardActivity', category: 'STREAMING', description: 'Control deck for ongoing feed adjustments.' }
    ]
  },
  {
    id: 'NOTIFICATIONS',
    name: 'Notifications',
    activities: [
      { id: 'MentionsActivity', name: 'MentionsActivity', category: 'NOTIFICATIONS', description: 'Filter feed of items specifically targeting your node.' },
      { id: 'ReactionsActivity', name: 'ReactionsActivity', category: 'NOTIFICATIONS', description: 'React indicators such as lights, comments, and stars.' },
      { id: 'AnnouncementsActivity', name: 'AnnouncementsActivity', category: 'NOTIFICATIONS', description: 'Global guidelines, updates, and maintenance warnings.' }
    ]
  },
  {
    id: 'SETTINGS',
    name: 'Settings',
    activities: [
      { id: 'SettingsActivity', name: 'SettingsActivity', category: 'SETTINGS', description: 'Main system settings dashboard.' },
      { id: 'AccountSettingsActivity', name: 'AccountSettingsActivity', category: 'SETTINGS', description: 'Credentials, verification levels, and keys managers.' },
      { id: 'PrivacyActivity', name: 'PrivacyActivity', category: 'SETTINGS', description: 'Toggle who can discover, link, or query your node.' },
      { id: 'SecurityActivity', name: 'SecurityActivity', category: 'SETTINGS', description: 'Review active authorization levels, SSH keys, and logins.' },
      { id: 'AppearanceActivity', name: 'AppearanceActivity', category: 'SETTINGS', description: 'Adjust layout presets, glow ratios, or brightness.' },
      { id: 'ThemesActivity', name: 'ThemesActivity', category: 'SETTINGS', description: 'Toggle thematic colors (Slate, Electric Cyan, Solar Magenta).' },
      { id: 'LanguageActivity', name: 'LanguageActivity', category: 'SETTINGS', description: 'Select region-specific localization files.' },
      { id: 'AccessibilityActivity', name: 'AccessibilityActivity', category: 'SETTINGS', description: 'Text sizes, high-contrast states, and audio guidelines.' },
      { id: 'StorageActivity', name: 'StorageActivity', category: 'SETTINGS', description: 'Clean system cache, temporary structures, and logs.' },
      { id: 'DataUsageActivity', name: 'DataUsageActivity', category: 'SETTINGS', description: 'Overview of network bandwidth utilized this cycle.' },
      { id: 'BackupActivity', name: 'BackupActivity', category: 'SETTINGS', description: 'Initiate manual/automated systemic state snapshots.' },
      { id: 'RestoreActivity', name: 'RestoreActivity', category: 'SETTINGS', description: 'Revert system parameters to prior verified stamps.' },
      { id: 'ActiveSessionsActivity', name: 'ActiveSessionsActivity', category: 'SETTINGS', description: 'Roster of terminals logged in with current signature.' },
      { id: 'DevicesActivity', name: 'DevicesActivity', category: 'SETTINGS', description: 'Inspect verified connected hardware terminals.' },
      { id: 'PermissionsActivity', name: 'PermissionsActivity', category: 'SETTINGS', description: 'Manage access rights for system apps (Camera, Mic).' },
      { id: 'DeveloperOptionsActivity', name: 'DeveloperOptionsActivity', category: 'SETTINGS', description: 'Unlock core debuggers, logs, and routing scopes.' }
    ]
  },
  {
    id: 'PREMIUM',
    name: 'Premium',
    activities: [
      { id: 'PremiumActivity', name: 'PremiumActivity', category: 'PREMIUM', description: 'Overview of premium features and available bundles.' },
      { id: 'SubscriptionActivity', name: 'SubscriptionActivity', category: 'PREMIUM', description: 'Currently active sub levels and renewal clocks.' },
      { id: 'UpgradeActivity', name: 'UpgradeActivity', category: 'PREMIUM', description: 'Elevate server access to level-2 tiers.' },
      { id: 'BillingActivity', name: 'BillingActivity', category: 'PREMIUM', description: 'Add credit contracts and pay cycle settings.' },
      { id: 'PaymentHistoryActivity', name: 'PaymentHistoryActivity', category: 'PREMIUM', description: 'Past ledger of currency payouts and contract invoices.' },
      { id: 'RewardsActivity', name: 'RewardsActivity', category: 'PREMIUM', description: 'Acquired bonus credits and badge certificates.' },
      { id: 'ReferralRewardsActivity', name: 'ReferralRewardsActivity', category: 'PREMIUM', description: 'Review successful node references and bonus credits.' },
      { id: 'CouponsActivity', name: 'CouponsActivity', category: 'PREMIUM', description: 'Interactive entry keys for price deductions.' },
      { id: 'TrialActivity', name: 'TrialActivity', category: 'PREMIUM', description: 'Configure active complimentary access cycles.' }
    ]
  },
  {
    id: 'MARKETPLACE',
    name: 'Marketplace',
    activities: [
      { id: 'MarketplaceActivity', name: 'MarketplaceActivity', category: 'MARKETPLACE', description: 'Browse peer products, widgets, and templates.' },
      { id: 'ProductActivity', name: 'ProductActivity', category: 'MARKETPLACE', description: 'Inspect details, specs, and reviews of a component.' },
      { id: 'SellerActivity', name: 'SellerActivity', category: 'MARKETPLACE', description: 'View developer profile, inventory count, and rating scores.' },
      { id: 'CartActivity', name: 'CartActivity', category: 'MARKETPLACE', description: 'Review and modify selected digital components.' },
      { id: 'CheckoutActivity', name: 'CheckoutActivity', category: 'MARKETPLACE', description: 'Confirm price calculations and select billing matrix.' },
      { id: 'OrdersActivity', name: 'OrdersActivity', category: 'MARKETPLACE', description: 'Review status of acquired licenses and items.' },
      { id: 'WishlistActivity', name: 'WishlistActivity', category: 'MARKETPLACE', description: 'Saved items awaiting core points allocation.' },
      { id: 'ReviewsActivity', name: 'ReviewsActivity', category: 'MARKETPLACE', description: 'Feedback metrics submitted on marketplace items.' },
      { id: 'RefundsActivity', name: 'RefundsActivity', category: 'MARKETPLACE', description: 'Initiate licensing return protocol for flawed code.' }
    ]
  },
  {
    id: 'CREATOR',
    name: 'Creator Hub',
    activities: [
      { id: 'CreatorStudioActivity', name: 'CreatorStudioActivity', category: 'CREATOR', description: 'Main hub to create custom chatbots, themes, or layouts.' },
      { id: 'PublishBotActivity', name: 'PublishBotActivity', category: 'CREATOR', description: 'Push a newly designed AI agent to the public marketplace.' },
      { id: 'PublishPromptActivity', name: 'PublishPromptActivity', category: 'CREATOR', description: 'Publish custom instruction chains for general usage.' },
      { id: 'PublishThemeActivity', name: 'PublishThemeActivity', category: 'CREATOR', description: 'Upload visual templates to the global appearance deck.' },
      { id: 'MonetizationActivity', name: 'MonetizationActivity', category: 'CREATOR', description: 'Setup custom licensing fees or tip systems.' },
      { id: 'RevenueActivity', name: 'RevenueActivity', category: 'CREATOR', description: 'Visual charts on accrued net-gains and client pings.' },
      { id: 'CreatorAnalyticsActivity', name: 'CreatorAnalyticsActivity', category: 'CREATOR', description: 'Audience counts, rating curves, and installation metrics.' },
      { id: 'CreatorSettingsActivity', name: 'CreatorSettingsActivity', category: 'CREATOR', description: 'Adjust licensing agreements, royalties ratio, and permissions.' }
    ]
  },
  {
    id: 'KNOWLEDGE',
    name: 'Knowledge Base',
    activities: [
      { id: 'NotesActivity', name: 'NotesActivity', category: 'KNOWLEDGE', description: 'Personal index of logs, codes snippets, and files.' },
      { id: 'NotebookActivity', name: 'NotebookActivity', category: 'KNOWLEDGE', description: 'Folder system containing multiple sub-notes.' },
      { id: 'WikiActivity', name: 'WikiActivity', category: 'KNOWLEDGE', description: 'Interlinked wiki articles on cybernetics and system laws.' },
      { id: 'DocumentEditorActivity', name: 'DocumentEditorActivity', category: 'KNOWLEDGE', description: 'Live Markdown / WYSIWYG futuristic documentation editor.' },
      { id: 'TemplatesActivity', name: 'TemplatesActivity', category: 'KNOWLEDGE', description: 'Layout models for fast report compilation.' },
      { id: 'KnowledgeBaseActivity', name: 'KnowledgeBaseActivity', category: 'KNOWLEDGE', description: 'Main directory for organizational documentation archives.' },
      { id: 'SearchKnowledgeActivity', name: 'SearchKnowledgeActivity', category: 'KNOWLEDGE', description: 'Quick semantic search inside written notebooks.' }
    ]
  },
  {
    id: 'PRODUCTIVITY',
    name: 'Productivity',
    activities: [
      { id: 'TasksActivity', name: 'TasksActivity', category: 'PRODUCTIVITY', description: 'System-wide list of outstanding actions.' },
      { id: 'ProjectsActivity', name: 'ProjectsActivity', category: 'PRODUCTIVITY', description: 'Manage multiple sub-task directories and deadlines.' },
      { id: 'CalendarActivity', name: 'CalendarActivity', category: 'PRODUCTIVITY', description: 'Epoch calendar displaying event allocations.' },
      { id: 'RemindersActivity', name: 'RemindersActivity', category: 'PRODUCTIVITY', description: 'Pulsing alarms set to sound on critical milestones.' },
      { id: 'GoalsActivity', name: 'GoalsActivity', category: 'PRODUCTIVITY', description: 'Long term goals panel with active percentage progress bars.' },
      { id: 'KanbanActivity', name: 'KanbanActivity', category: 'PRODUCTIVITY', description: 'Subtle retro-futuristic card column organizer.' },
      { id: 'TimeTrackerActivity', name: 'TimeTrackerActivity', category: 'PRODUCTIVITY', description: 'Real-time clock recording development pings.' }
    ]
  },
  {
    id: 'GAMING',
    name: 'Gaming Hub',
    activities: [
      { id: 'GamesActivity', name: 'GamesActivity', category: 'GAMING', description: 'Explore simulated retro hack mini-games.' },
      { id: 'AchievementsActivity_game', name: 'AchievementsActivity', category: 'GAMING', description: 'Inspect unlocked milestones inside galactic gaming lobbies.' },
      { id: 'LeaderboardsActivity', name: 'LeaderboardsActivity', category: 'GAMING', description: 'Browse rank charts of the top cyber-hackers on the network.' },
      { id: 'QuestsActivity', name: 'QuestsActivity', category: 'GAMING', description: 'Active terminal challenges providing node experience.' },
      { id: 'DailyRewardsActivity', name: 'DailyRewardsActivity', category: 'GAMING', description: 'Receive daily credit allocations or boost packages.' },
      { id: 'InventoryActivity', name: 'InventoryActivity', category: 'GAMING', description: 'Inspect collected cards, equipment badges, and keys.' },
      { id: 'TournamentsActivity', name: 'TournamentsActivity', category: 'GAMING', description: 'Brackets, calendars, and entry logs for active hacking tourneys.' },
      { id: 'GameProfilesActivity', name: 'GameProfilesActivity', category: 'GAMING', description: 'Browse and edit personal avatar and stats configurations.' }
    ]
  },
  {
    id: 'DEVELOPER',
    name: 'Developer Space',
    activities: [
      { id: 'DeveloperDashboardActivity', name: 'DeveloperDashboardActivity', category: 'DEVELOPER', description: 'Main cockpit for managing linked nodes and custom applications.' },
      { id: 'APIKeysActivity', name: 'APIKeysActivity', category: 'DEVELOPER', description: 'Generate and revoke high-security token keys.' },
      { id: 'WebhooksActivity', name: 'WebhooksActivity', category: 'DEVELOPER', description: 'Configure callback URLs for secure event routing.' },
      { id: 'IntegrationsActivity', name: 'IntegrationsActivity', category: 'DEVELOPER', description: 'Connect third party platforms (Discord, Github, Slack).' },
      { id: 'SDKDownloadsActivity', name: 'SDKDownloadsActivity', category: 'DEVELOPER', description: 'Download client frameworks in multiple coding syntaxes.' },
      { id: 'LogsActivity', name: 'LogsActivity', category: 'DEVELOPER', description: 'Monitor incoming requests, status codes, and query logs.' },
      { id: 'TestingActivity', name: 'TestingActivity', category: 'DEVELOPER', description: 'Execute payload check tests and structural dry-runs.' },
      { id: 'SandboxActivity', name: 'SandboxActivity', category: 'DEVELOPER', description: 'Playground to execute script blocks in a visual emulator.' }
    ]
  },
  {
    id: 'ADMIN',
    name: 'Admin Desk',
    activities: [
      { id: 'AdminDashboardActivity', name: 'AdminDashboardActivity', category: 'ADMIN', description: 'Aggregated view of network status, active nodes, and reports.' },
      { id: 'UserManagementActivity', name: 'UserManagementActivity', category: 'ADMIN', description: 'Verify identities, grant creator privileges, or lock nodes.' },
      { id: 'ReportsActivity', name: 'ReportsActivity', category: 'ADMIN', description: 'Roster of violation reports and complaints logged.' },
      { id: 'ModerationActivity', name: 'ModerationActivity', category: 'ADMIN', description: 'Execute bans, warning pings, or shadow-quarantines.' },
      { id: 'AuditLogsActivity', name: 'AuditLogsActivity', category: 'ADMIN', description: 'Immutable chronological catalog of all admin logs.' },
      { id: 'AnalyticsActivity', name: 'AnalyticsActivity', category: 'ADMIN', description: 'Analyze structural metrics, growth rates, and retention curves.' },
      { id: 'FeatureFlagsActivity', name: 'FeatureFlagsActivity', category: 'ADMIN', description: 'Toggle custom system experiments and beta rollouts.' },
      { id: 'RemoteConfigActivity', name: 'RemoteConfigActivity', category: 'ADMIN', description: 'Manage dynamic systemic variables and endpoint mappings.' },
      { id: 'SystemHealthActivity', name: 'SystemHealthActivity', category: 'ADMIN', description: 'Live status of servers, database indexing latency, and database storage.' }
    ]
  },
  {
    id: 'SUPPORT',
    name: 'Support & Help',
    activities: [
      { id: 'HelpCenterActivity', name: 'HelpCenterActivity', category: 'SUPPORT', description: 'Main hub containing instructions and system setup manuals.' },
      { id: 'FAQActivity', name: 'FAQActivity', category: 'SUPPORT', description: 'Frequently asked questions regarding connection failures or licensing.' },
      { id: 'ContactSupportActivity', name: 'ContactSupportActivity', category: 'SUPPORT', description: 'Establish an encrypted session with a help administrator.' },
      { id: 'FeedbackActivity', name: 'FeedbackActivity', category: 'SUPPORT', description: 'Submit functional ideas to the developing board.' },
      { id: 'BugReportActivity', name: 'BugReportActivity', category: 'SUPPORT', description: 'File structural error details directly to debug trackers.' },
      { id: 'FeatureRequestsActivity', name: 'FeatureRequestsActivity', category: 'SUPPORT', description: 'Upvote and review requested features from other nodes.' },
      { id: 'SystemStatusActivity', name: 'SystemStatusActivity', category: 'SUPPORT', description: 'Live ping index of global server regions.' },
      { id: 'AboutActivity', name: 'AboutActivity', category: 'SUPPORT', description: 'System software specs, version lists, and developer contributions.' }
    ]
  },
  {
    id: 'LEGAL',
    name: 'Legal Desk',
    activities: [
      { id: 'PrivacyPolicyActivity', name: 'PrivacyPolicyActivity', category: 'LEGAL', description: 'Official outline detailing how biometric files and tokens are stored.' },
      { id: 'TermsOfServiceActivity', name: 'TermsOfServiceActivity', category: 'LEGAL', description: 'Binding contract on system usage rules and behavior protocols.' },
      { id: 'CommunityGuidelinesActivity', name: 'CommunityGuidelinesActivity', category: 'LEGAL', description: 'System-wide standards on interaction safety.' },
      { id: 'CopyrightActivity', name: 'CopyrightActivity', category: 'LEGAL', description: 'Notice on custom licensing scripts and layout intellectual rights.' },
      { id: 'LicensesActivity', name: 'LicensesActivity', category: 'LEGAL', description: 'Browse active open-source component licensing files.' },
      { id: 'AccountDeletionActivity', name: 'AccountDeletionActivity', category: 'LEGAL', description: 'Trigger destructive sequence to wipe identity contract forever.' }
    ]
  }
];
