const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Behaviors.Fade,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSet,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.Eponesh_GameScore.Cnds.OnLeaderboardFetch,
		C3.Plugins.Eponesh_GameScore.Cnds.LeaderboardEachPlayer,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerIndex,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Cnds.PickByUID,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Eponesh_GameScore.Cnds.PlayerCompare,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerAdd,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerLogin,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPlayerLoginComplete
	];
};
self.C3_JsPropNameTable = [
	{Якорь: 0},
	{ТайловыйФон: 0},
	{Money_Txt: 0},
	{Setting: 0},
	{Wallet_button: 0},
	{Text_button: 0},
	{ТайловыйФон2: 0},
	{Brawser_button: 0},
	{Support_button: 0},
	{Text_button2: 0},
	{GamePush: 0},
	{GamePushChannels: 0},
	{ТайловыйФон3: 0},
	{leaders: 0},
	{Тач: 0},
	{Браузер: 0},
	{Mini_Panel: 0},
	{Текст: 0},
	{e0000c21d13b3e3b445893840ab: 0},
	{Текст2: 0},
	{Угасание: 0},
	{NoUSD: 0},
	{NoUSD_txt: 0},
	{icons8нет: 0},
	{Picsart_250330_: 0},
	{Текст3: 0},
	{enicoin: 0},
	{moterti: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Money_Txt: class extends self.ITextInstance {},
	Setting: class extends self.ISpriteInstance {},
	Wallet_button: class extends self.ISpriteInstance {},
	Text_button: class extends self.ITextInstance {},
	ТайловыйФон2: class extends self.ITiledBackgroundInstance {},
	Brawser_button: class extends self.ISpriteInstance {},
	Support_button: class extends self.ISpriteInstance {},
	Text_button2: class extends self.ITextInstance {},
	GamePush: class extends self.C3.Plugins.Eponesh_GameScore.Instance {},
	GamePushChannels: class extends self.C3.Plugins.GamePush_Channels.Instance {},
	ТайловыйФон3: class extends self.ITiledBackgroundInstance {},
	leaders: class extends self.ITextInstance {},
	Тач: class extends self.IInstance {},
	Браузер: class extends self.IInstance {},
	Mini_Panel: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	e0000c21d13b3e3b445893840ab: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {},
	NoUSD: class extends self.ISpriteInstance {},
	NoUSD_txt: class extends self.ITextInstance {},
	icons8нет: class extends self.ISpriteInstance {},
	Picsart_250330_: class extends self.ISpriteInstance {},
	Текст3: class extends self.ITextInstance {}
}