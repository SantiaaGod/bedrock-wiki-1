if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const a=s=>l(s,t),u={module:{uri:t},exports:r,require:a};e[t]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.fb3ea0c9.js",revision:null},{url:"assets/404.md.fb3ea0c9.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.476df1d3.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.476df1d3.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b941c3bc.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b941c3bc.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.65524e55.js",revision:null},{url:"assets/animation-controllers_death-commands.md.65524e55.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.7f70674b.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.7f70674b.lean.js",revision:null},{url:"assets/animation-controllers_index.md.503c4b2a.js",revision:null},{url:"assets/animation-controllers_index.md.503c4b2a.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.d3b1c023.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.d3b1c023.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.98e05800.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.98e05800.lean.js",revision:null},{url:"assets/app.aee87592.js",revision:null},{url:"assets/blocks_applying-effects.md.9363544d.js",revision:null},{url:"assets/blocks_applying-effects.md.9363544d.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.f1ce873c.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.f1ce873c.lean.js",revision:null},{url:"assets/blocks_block-components.md.45a36191.js",revision:null},{url:"assets/blocks_block-components.md.45a36191.lean.js",revision:null},{url:"assets/blocks_block-events.md.62dd8bf7.js",revision:null},{url:"assets/blocks_block-events.md.62dd8bf7.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.764fe9dd.js",revision:null},{url:"assets/blocks_block-permutations.md.764fe9dd.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.5d6b8893.js",revision:null},{url:"assets/blocks_block-shapes.md.5d6b8893.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.9ad8ffa3.js",revision:null},{url:"assets/blocks_block-sounds.md.9ad8ffa3.lean.js",revision:null},{url:"assets/blocks_block-states.md.90f4fef8.js",revision:null},{url:"assets/blocks_block-states.md.90f4fef8.lean.js",revision:null},{url:"assets/blocks_block-tags.md.a539f505.js",revision:null},{url:"assets/blocks_block-tags.md.a539f505.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.33ee6294.js",revision:null},{url:"assets/blocks_block-texture-variation.md.33ee6294.lean.js",revision:null},{url:"assets/blocks_block-traits.md.1d68e95c.js",revision:null},{url:"assets/blocks_block-traits.md.1d68e95c.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.8b764c19.js",revision:null},{url:"assets/blocks_blocks-experimental.md.8b764c19.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.05270396.js",revision:null},{url:"assets/blocks_blocks-intro.md.05270396.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.dcf8692c.js",revision:null},{url:"assets/blocks_custom-crops.md.dcf8692c.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.15b29cd3.js",revision:null},{url:"assets/blocks_custom-fluids.md.15b29cd3.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.584619ff.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.584619ff.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.6826fd79.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.6826fd79.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.c64abd75.js",revision:null},{url:"assets/blocks_custom-slabs.md.c64abd75.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.b4b24ee9.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.b4b24ee9.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.b2d42dee.js",revision:null},{url:"assets/blocks_custom-trees.md.b2d42dee.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.c712fb72.js",revision:null},{url:"assets/blocks_fake-blocks.md.c712fb72.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.eeebd20e.js",revision:null},{url:"assets/blocks_flipbook-textures.md.eeebd20e.lean.js",revision:null},{url:"assets/blocks_index.md.886979bc.js",revision:null},{url:"assets/blocks_index.md.886979bc.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.fb03378f.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.fb03378f.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.8a3efe3d.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.8a3efe3d.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.3ac2abd8.js",revision:null},{url:"assets/blocks_precise-interaction.md.3ac2abd8.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.4f867e61.js",revision:null},{url:"assets/blocks_precise-rotation.md.4f867e61.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f8e9fd67.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.f8e9fd67.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.448b0043.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.448b0043.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.34fb0252.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.fc3ba884.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.cc733d12.js",revision:null},{url:"assets/commands_block-states.md.cc733d12.lean.js",revision:null},{url:"assets/commands_damage.md.13cf6673.js",revision:null},{url:"assets/commands_damage.md.13cf6673.lean.js",revision:null},{url:"assets/commands_entity-counter.md.5b654f50.js",revision:null},{url:"assets/commands_entity-counter.md.5b654f50.lean.js",revision:null},{url:"assets/commands_index.md.d37d7675.js",revision:null},{url:"assets/commands_index.md.d37d7675.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.6f4f47e7.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.6f4f47e7.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.0c3d98d3.js",revision:null},{url:"assets/commands_mcfunctions.md.0c3d98d3.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.7d29c8c3.js",revision:null},{url:"assets/commands_nbt-commands.md.7d29c8c3.lean.js",revision:null},{url:"assets/commands_new-execute.md.27710ba2.js",revision:null},{url:"assets/commands_new-execute.md.27710ba2.lean.js",revision:null},{url:"assets/commands_on-first-join.md.127ee54e.js",revision:null},{url:"assets/commands_on-first-join.md.127ee54e.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.7b989d23.js",revision:null},{url:"assets/commands_on-first-world-load.md.7b989d23.lean.js",revision:null},{url:"assets/commands_on-player-death.md.2bc263cc.js",revision:null},{url:"assets/commands_on-player-death.md.2bc263cc.lean.js",revision:null},{url:"assets/commands_on-player-join.md.e3961734.js",revision:null},{url:"assets/commands_on-player-join.md.e3961734.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.6822aa57.js",revision:null},{url:"assets/commands_on-player-leave.md.6822aa57.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.181d163d.js",revision:null},{url:"assets/commands_on-player-respawn.md.181d163d.lean.js",revision:null},{url:"assets/commands_playsound.md.ab7c0f55.js",revision:null},{url:"assets/commands_playsound.md.ab7c0f55.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.bc515d6d.js",revision:null},{url:"assets/commands_relative-coordinates.md.bc515d6d.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.533cae21.js",revision:null},{url:"assets/commands_scoreboard-operations.md.533cae21.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8f5c978b.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8f5c978b.lean.js",revision:null},{url:"assets/commands_selectors.md.1df68839.js",revision:null},{url:"assets/commands_selectors.md.1df68839.lean.js",revision:null},{url:"assets/commands_tellraw.md.8eb8363c.js",revision:null},{url:"assets/commands_tellraw.md.8eb8363c.lean.js",revision:null},{url:"assets/concepts_contents.md.842b01b7.js",revision:null},{url:"assets/concepts_contents.md.842b01b7.lean.js",revision:null},{url:"assets/concepts_emojis.md.db952b06.js",revision:null},{url:"assets/concepts_emojis.md.db952b06.lean.js",revision:null},{url:"assets/concepts_index.md.efe015ac.js",revision:null},{url:"assets/concepts_index.md.efe015ac.lean.js",revision:null},{url:"assets/concepts_molang.md.77b7ef87.js",revision:null},{url:"assets/concepts_molang.md.77b7ef87.lean.js",revision:null},{url:"assets/concepts_namespaces.md.0c1eab42.js",revision:null},{url:"assets/concepts_namespaces.md.0c1eab42.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.514c6059.js",revision:null},{url:"assets/concepts_overwriting-assets.md.514c6059.lean.js",revision:null},{url:"assets/concepts_shaders.md.a3ddffe4.js",revision:null},{url:"assets/concepts_shaders.md.a3ddffe4.lean.js",revision:null},{url:"assets/concepts_sounds.md.b9ae4c04.js",revision:null},{url:"assets/concepts_sounds.md.b9ae4c04.lean.js",revision:null},{url:"assets/concepts_subpacks.md.80202a66.js",revision:null},{url:"assets/concepts_subpacks.md.80202a66.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.f2b1fd17.js",revision:null},{url:"assets/concepts_text-and-translations.md.f2b1fd17.lean.js",revision:null},{url:"assets/concepts_textures-list.md.ee4f14eb.js",revision:null},{url:"assets/concepts_textures-list.md.ee4f14eb.lean.js",revision:null},{url:"assets/contribute-how-to.md.00dbdcb6.js",revision:null},{url:"assets/contribute-how-to.md.00dbdcb6.lean.js",revision:null},{url:"assets/contribute-style.md.e6abafbe.js",revision:null},{url:"assets/contribute-style.md.e6abafbe.lean.js",revision:null},{url:"assets/contribute.md.e4d5c765.js",revision:null},{url:"assets/contribute.md.e4d5c765.lean.js",revision:null},{url:"assets/discord.md.9d8cc9d5.js",revision:null},{url:"assets/discord.md.9d8cc9d5.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.482f76de.js",revision:null},{url:"assets/documentation_advanced-molang.md.482f76de.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.d7a7eb0c.js",revision:null},{url:"assets/documentation_creative-categories.md.d7a7eb0c.lean.js",revision:null},{url:"assets/documentation_file-types.md.5abd30d8.js",revision:null},{url:"assets/documentation_file-types.md.5abd30d8.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.b32aa9ff.js",revision:null},{url:"assets/documentation_fog-ids.md.b32aa9ff.lean.js",revision:null},{url:"assets/documentation_index.md.68f9baa3.js",revision:null},{url:"assets/documentation_index.md.68f9baa3.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.1607faa6.js",revision:null},{url:"assets/documentation_material-config-description.md.1607faa6.lean.js",revision:null},{url:"assets/documentation_materials.md.dc8e315f.js",revision:null},{url:"assets/documentation_materials.md.dc8e315f.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.f0cf1b18.js",revision:null},{url:"assets/documentation_pack-structure.md.f0cf1b18.lean.js",revision:null},{url:"assets/documentation_projectiles.md.6ad7b4bc.js",revision:null},{url:"assets/documentation_projectiles.md.6ad7b4bc.lean.js",revision:null},{url:"assets/documentation_queries.md.977f5303.js",revision:null},{url:"assets/documentation_queries.md.977f5303.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.a4807da1.js",revision:null},{url:"assets/documentation_shared-constructs.md.a4807da1.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.3bb67753.js",revision:null},{url:"assets/documentation_sound-definitions.md.3bb67753.lean.js",revision:null},{url:"assets/entities_boat-entities.md.6ee236be.js",revision:null},{url:"assets/entities_boat-entities.md.6ee236be.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.16ec7501.js",revision:null},{url:"assets/entities_detecting-other-entities.md.16ec7501.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.7cea0492.js",revision:null},{url:"assets/entities_disabling-team-damage.md.7cea0492.lean.js",revision:null},{url:"assets/entities_dummy-components.md.3fb213b4.js",revision:null},{url:"assets/entities_dummy-components.md.3fb213b4.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.0cae6a92.js",revision:null},{url:"assets/entities_dummy-entities.md.0cae6a92.lean.js",revision:null},{url:"assets/entities_entity-attack.md.a747f2bf.js",revision:null},{url:"assets/entities_entity-attack.md.a747f2bf.lean.js",revision:null},{url:"assets/entities_entity-events.md.72053298.js",revision:null},{url:"assets/entities_entity-events.md.72053298.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.db3bd658.js",revision:null},{url:"assets/entities_entity-holds-item.md.db3bd658.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d5fa805c.js",revision:null},{url:"assets/entities_entity-intro-bp.md.d5fa805c.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.96df6c7d.js",revision:null},{url:"assets/entities_entity-intro-rp.md.96df6c7d.lean.js",revision:null},{url:"assets/entities_entity-movement.md.3616a233.js",revision:null},{url:"assets/entities_entity-movement.md.3616a233.lean.js",revision:null},{url:"assets/entities_entity-properties.md.7e4656c0.js",revision:null},{url:"assets/entities_entity-properties.md.7e4656c0.lean.js",revision:null},{url:"assets/entities_flying-entities.md.a2f32835.js",revision:null},{url:"assets/entities_flying-entities.md.a2f32835.lean.js",revision:null},{url:"assets/entities_index.md.58cf5815.js",revision:null},{url:"assets/entities_index.md.58cf5815.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.cbca363d.js",revision:null},{url:"assets/entities_introduction-to-aec.md.cbca363d.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.cc75fdc4.js",revision:null},{url:"assets/entities_invulnerable-entities.md.cc75fdc4.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.66c60eac.js",revision:null},{url:"assets/entities_look-at-entity.md.66c60eac.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.3d3397d5.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.3d3397d5.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.469df1f9.js",revision:null},{url:"assets/entities_npc-dialogs.md.469df1f9.lean.js",revision:null},{url:"assets/entities_render-controllers.md.1f5f6565.js",revision:null},{url:"assets/entities_render-controllers.md.1f5f6565.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.8bfb9d85.js",revision:null},{url:"assets/entities_runtime-identifier.md.8bfb9d85.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.6f8873d4.js",revision:null},{url:"assets/entities_sleeping-entities.md.6f8873d4.lean.js",revision:null},{url:"assets/entities_solid-entities.md.d9b3b550.js",revision:null},{url:"assets/entities_solid-entities.md.d9b3b550.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.bad2050e.js",revision:null},{url:"assets/entities_spawn-rules.md.bad2050e.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.5b6f2203.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.5b6f2203.lean.js",revision:null},{url:"assets/entities_timers.md.18d5a8a0.js",revision:null},{url:"assets/entities_timers.md.18d5a8a0.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.0e40c738.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.0e40c738.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.e7201300.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.e7201300.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.7cfcae94.js",revision:null},{url:"assets/entities_village-mechanic.md.7cfcae94.lean.js",revision:null},{url:"assets/entities_vuc-full.md.6e7796d2.lean.js",revision:null},{url:"assets/entities_vusr-full.md.218b9bc1.js",revision:null},{url:"assets/entities_vusr-full.md.218b9bc1.lean.js",revision:null},{url:"assets/graph-test.md.90b69de6.js",revision:null},{url:"assets/graph-test.md.90b69de6.lean.js",revision:null},{url:"assets/guide_addons.md.339252aa.js",revision:null},{url:"assets/guide_addons.md.339252aa.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.938c0183.js",revision:null},{url:"assets/guide_advancedmanifest.md.938c0183.lean.js",revision:null},{url:"assets/guide_blockbench.md.820a9ffc.js",revision:null},{url:"assets/guide_blockbench.md.820a9ffc.lean.js",revision:null},{url:"assets/guide_custom-entity.md.5f1fd5da.js",revision:null},{url:"assets/guide_custom-entity.md.5f1fd5da.lean.js",revision:null},{url:"assets/guide_custom-item.md.f03b7ee3.js",revision:null},{url:"assets/guide_custom-item.md.f03b7ee3.lean.js",revision:null},{url:"assets/guide_download-packs.md.ecfe39b9.js",revision:null},{url:"assets/guide_download-packs.md.ecfe39b9.lean.js",revision:null},{url:"assets/guide_format-version.md.e31b20ed.js",revision:null},{url:"assets/guide_format-version.md.e31b20ed.lean.js",revision:null},{url:"assets/guide_index.md.681d3341.js",revision:null},{url:"assets/guide_index.md.681d3341.lean.js",revision:null},{url:"assets/guide_introduction.md.a25c6496.js",revision:null},{url:"assets/guide_introduction.md.a25c6496.lean.js",revision:null},{url:"assets/guide_loot-table.md.73b9d842.js",revision:null},{url:"assets/guide_loot-table.md.73b9d842.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.f6f3ebd3.js",revision:null},{url:"assets/guide_project-setup-android.md.f6f3ebd3.lean.js",revision:null},{url:"assets/guide_project-setup.md.16adafd1.js",revision:null},{url:"assets/guide_project-setup.md.16adafd1.lean.js",revision:null},{url:"assets/guide_software-preparation.md.7db2c04b.js",revision:null},{url:"assets/guide_software-preparation.md.7db2c04b.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.e168b405.js",revision:null},{url:"assets/guide_troubleshooting.md.e168b405.lean.js",revision:null},{url:"assets/guide_understanding-json.md.c1cd3716.js",revision:null},{url:"assets/guide_understanding-json.md.c1cd3716.lean.js",revision:null},{url:"assets/hacktoberfest.md.7d7e8634.js",revision:null},{url:"assets/hacktoberfest.md.7d7e8634.lean.js",revision:null},{url:"assets/index.md.f112cb6b.js",revision:null},{url:"assets/index.md.f112cb6b.lean.js",revision:null},{url:"assets/items_attachables.md.6fad94d5.js",revision:null},{url:"assets/items_attachables.md.6fad94d5.lean.js",revision:null},{url:"assets/items_custom-armor.md.c1369409.js",revision:null},{url:"assets/items_custom-armor.md.c1369409.lean.js",revision:null},{url:"assets/items_custom-weapon.md.5a5357b8.js",revision:null},{url:"assets/items_custom-weapon.md.5a5357b8.lean.js",revision:null},{url:"assets/items_enchantments.md.72c738d5.js",revision:null},{url:"assets/items_enchantments.md.72c738d5.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.1eb95e5e.js",revision:null},{url:"assets/items_equipped-item-commands.md.1eb95e5e.lean.js",revision:null},{url:"assets/items_index.md.259fa22f.js",revision:null},{url:"assets/items_index.md.259fa22f.lean.js",revision:null},{url:"assets/items_item-identifiers.md.68eca1c5.js",revision:null},{url:"assets/items_item-identifiers.md.68eca1c5.lean.js",revision:null},{url:"assets/items_items-16.md.027a723e.js",revision:null},{url:"assets/items_items-16.md.027a723e.lean.js",revision:null},{url:"assets/items_items-intro.md.bf9a5c35.js",revision:null},{url:"assets/items_items-intro.md.bf9a5c35.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.52d4f160.js",revision:null},{url:"assets/items_numerical-item-ids.md.52d4f160.lean.js",revision:null},{url:"assets/items_spawning-items.md.350c6be8.js",revision:null},{url:"assets/items_spawning-items.md.350c6be8.lean.js",revision:null},{url:"assets/items_spear.md.7a043f7f.js",revision:null},{url:"assets/items_spear.md.7a043f7f.lean.js",revision:null},{url:"assets/items_throwable.md.1b2e08be.js",revision:null},{url:"assets/items_throwable.md.1b2e08be.lean.js",revision:null},{url:"assets/items_tool-durability.md.ab8ce10b.js",revision:null},{url:"assets/items_tool-durability.md.ab8ce10b.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.70453413.js",revision:null},{url:"assets/items_troubleshooting-items.md.70453413.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.fab215b4.js",revision:null},{url:"assets/items_vanilla-usage-items.md.fab215b4.lean.js",revision:null},{url:"assets/items_vui-full.md.c74987f3.js",revision:null},{url:"assets/items_vui-full.md.c74987f3.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.47756a41.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.47756a41.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.f3f38f3b.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.f3f38f3b.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.38b2e6e1.js",revision:null},{url:"assets/json-ui_best-practices.md.38b2e6e1.lean.js",revision:null},{url:"assets/json-ui_index.md.f2da1fc0.js",revision:null},{url:"assets/json-ui_index.md.f2da1fc0.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.955d7146.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.955d7146.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ef0ecbd6.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ef0ecbd6.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.239a884d.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.239a884d.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.aaee2358.js",revision:null},{url:"assets/json-ui_string-to-number.md.aaee2358.lean.js",revision:null},{url:"assets/loot_index.md.1c87e61e.js",revision:null},{url:"assets/loot_index.md.1c87e61e.lean.js",revision:null},{url:"assets/loot_item-functions.md.61c9098f.js",revision:null},{url:"assets/loot_item-functions.md.61c9098f.lean.js",revision:null},{url:"assets/loot_loot-tables.md.24bc9325.js",revision:null},{url:"assets/loot_loot-tables.md.24bc9325.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.5765122f.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.5765122f.lean.js",revision:null},{url:"assets/loot_recipes.md.be6b9caa.js",revision:null},{url:"assets/loot_recipes.md.be6b9caa.lean.js",revision:null},{url:"assets/loot_trade-tables.md.6f5c06ba.js",revision:null},{url:"assets/loot_trade-tables.md.6f5c06ba.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.62bfdf92.js",revision:null},{url:"assets/loot_trading-behavior.md.62bfdf92.lean.js",revision:null},{url:"assets/meta_addon-performance.md.6a59b7d1.js",revision:null},{url:"assets/meta_addon-performance.md.6a59b7d1.lean.js",revision:null},{url:"assets/meta_index.md.6234399c.js",revision:null},{url:"assets/meta_index.md.6234399c.lean.js",revision:null},{url:"assets/meta_jq.md.ae04a975.js",revision:null},{url:"assets/meta_jq.md.ae04a975.lean.js",revision:null},{url:"assets/meta_style-guide.md.3b1f3e7a.js",revision:null},{url:"assets/meta_style-guide.md.3b1f3e7a.lean.js",revision:null},{url:"assets/meta_useful-links.md.e0c47117.js",revision:null},{url:"assets/meta_useful-links.md.e0c47117.lean.js",revision:null},{url:"assets/meta_using-schemas.md.a5b12527.js",revision:null},{url:"assets/meta_using-schemas.md.a5b12527.lean.js",revision:null},{url:"assets/meta_version-control.md.9052ecad.js",revision:null},{url:"assets/meta_version-control.md.9052ecad.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.e11f4776.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.e11f4776.lean.js",revision:null},{url:"assets/nbt_index.md.c10a45e3.js",revision:null},{url:"assets/nbt_index.md.c10a45e3.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.f40fcc1f.js",revision:null},{url:"assets/nbt_mcstructure.md.f40fcc1f.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e60df207.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e60df207.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.3980a59e.js",revision:null},{url:"assets/nbt_step-by-step-example.md.3980a59e.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.e8c2f8d3.js",revision:null},{url:"assets/nbt_structure-limits.md.e8c2f8d3.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.76a2de6d.js",revision:null},{url:"assets/particles_disabling-particles.md.76a2de6d.lean.js",revision:null},{url:"assets/particles_index.md.ea388b25.js",revision:null},{url:"assets/particles_index.md.ea388b25.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.7c9fed93.js",revision:null},{url:"assets/particles_particles-and-sounds.md.7c9fed93.lean.js",revision:null},{url:"assets/particles_particles.md.90e26a94.js",revision:null},{url:"assets/particles_particles.md.90e26a94.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.c14e2f20.js",revision:null},{url:"assets/particles_vanilla-particles.md.c14e2f20.lean.js",revision:null},{url:"assets/privacy.md.e8764586.js",revision:null},{url:"assets/privacy.md.e8764586.lean.js",revision:null},{url:"assets/scripting_api-environment.md.d606555b.js",revision:null},{url:"assets/scripting_api-environment.md.d606555b.lean.js",revision:null},{url:"assets/scripting_custom-command.md.49ec3efa.js",revision:null},{url:"assets/scripting_custom-command.md.49ec3efa.lean.js",revision:null},{url:"assets/scripting_game-tests.md.59b8fcb9.js",revision:null},{url:"assets/scripting_game-tests.md.59b8fcb9.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.2bf940e6.js",revision:null},{url:"assets/scripting_gametest-form.md.2bf940e6.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.d16ca4fa.js",revision:null},{url:"assets/scripting_gametest-qna.md.d16ca4fa.lean.js",revision:null},{url:"assets/scripting_index.md.c788457b.js",revision:null},{url:"assets/scripting_index.md.c788457b.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.ccb82f6f.js",revision:null},{url:"assets/scripting_placement-prevention.md.ccb82f6f.lean.js",revision:null},{url:"assets/scripting_resources.md.7f021f92.js",revision:null},{url:"assets/scripting_resources.md.7f021f92.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.e7bf31ed.js",revision:null},{url:"assets/scripting_saving-loading.md.e7bf31ed.lean.js",revision:null},{url:"assets/scripting_script-modules.md.28efd727.js",revision:null},{url:"assets/scripting_script-modules.md.28efd727.lean.js",revision:null},{url:"assets/scripting_script-net.md.0856c104.js",revision:null},{url:"assets/scripting_script-net.md.0856c104.lean.js",revision:null},{url:"assets/scripting_script-server.md.f289a097.js",revision:null},{url:"assets/scripting_script-server.md.f289a097.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.aa926114.js",revision:null},{url:"assets/scripting_script-watchdog.md.aa926114.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.5252bb2c.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.5252bb2c.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.cbdc7dbf.js",revision:null},{url:"assets/scripting_scripting-intro.md.cbdc7dbf.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.9e546907.js",revision:null},{url:"assets/scripting_starting-scripts.md.9e546907.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.ed869fa5.js",revision:null},{url:"assets/scripting_troubleshooting.md.ed869fa5.lean.js",revision:null},{url:"assets/scripting_typescript.md.f0706b79.js",revision:null},{url:"assets/scripting_typescript.md.f0706b79.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.013a5ebc.js",revision:null},{url:"assets/scripting_what-is-script.md.013a5ebc.lean.js",revision:null},{url:"assets/servers_index.md.09667514.js",revision:null},{url:"assets/servers_index.md.09667514.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.720910de.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.720910de.lean.js",revision:null},{url:"assets/servers_server-software.md.3ddd3349.js",revision:null},{url:"assets/servers_server-software.md.3ddd3349.lean.js",revision:null},{url:"assets/style.9fab58b9.css",revision:null},{url:"assets/test.md.23156ec1.js",revision:null},{url:"assets/test.md.23156ec1.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.f4e337ad.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.f4e337ad.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.e0673037.js",revision:null},{url:"assets/visuals_animation-effects.md.e0673037.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.26876d4f.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.26876d4f.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.2b4bb604.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.2b4bb604.lean.js",revision:null},{url:"assets/visuals_death-animations.md.8650b65b.js",revision:null},{url:"assets/visuals_death-animations.md.8650b65b.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.68a51878.js",revision:null},{url:"assets/visuals_glowing-texture.md.68a51878.lean.js",revision:null},{url:"assets/visuals_index.md.7d350440.js",revision:null},{url:"assets/visuals_index.md.7d350440.lean.js",revision:null},{url:"assets/visuals_introduction.md.197fb415.js",revision:null},{url:"assets/visuals_introduction.md.197fb415.lean.js",revision:null},{url:"assets/visuals_leash-position.md.97dc6669.js",revision:null},{url:"assets/visuals_leash-position.md.97dc6669.lean.js",revision:null},{url:"assets/visuals_material-creations.md.51b08125.js",revision:null},{url:"assets/visuals_material-creations.md.51b08125.lean.js",revision:null},{url:"assets/visuals_materials.md.704839a4.js",revision:null},{url:"assets/visuals_materials.md.704839a4.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.455cfd04.js",revision:null},{url:"assets/visuals_math-based-animations.md.455cfd04.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.7368690e.js",revision:null},{url:"assets/visuals_player-geometry.md.7368690e.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.95b11232.js",revision:null},{url:"assets/visuals_remove-shadows.md.95b11232.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.6ebde9eb.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.6ebde9eb.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.df1ff8cd.js",revision:null},{url:"assets/visuals_structure-presentation.md.df1ff8cd.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.c338e13b.js",revision:null},{url:"assets/vr_editing-your-first-model.md.c338e13b.lean.js",revision:null},{url:"assets/vr_index.md.8c578293.js",revision:null},{url:"assets/vr_index.md.8c578293.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.1babc13a.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.1babc13a.lean.js",revision:null},{url:"assets/vr_pack_setup.md.17d69c3c.js",revision:null},{url:"assets/vr_pack_setup.md.17d69c3c.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.e59e8af0.js",revision:null},{url:"assets/world-generation_biome-tags.md.e59e8af0.lean.js",revision:null},{url:"assets/world-generation_biomes.md.9635a3e1.js",revision:null},{url:"assets/world-generation_biomes.md.9635a3e1.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.410e2245.js",revision:null},{url:"assets/world-generation_custom-ores.md.410e2245.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.28ca73c8.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.28ca73c8.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.44cfaf78.js",revision:null},{url:"assets/world-generation_feature-types.md.44cfaf78.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.6d0b2a2f.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.6d0b2a2f.lean.js",revision:null},{url:"assets/world-generation_index.md.a2b3d846.js",revision:null},{url:"assets/world-generation_index.md.a2b3d846.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.e1bcc8a6.js",revision:null},{url:"assets/world-generation_structure-features.md.e1bcc8a6.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.d8e2276b.js",revision:null},{url:"assets/world-generation_surface-builder.md.d8e2276b.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.2ecc7953.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.2ecc7953.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
