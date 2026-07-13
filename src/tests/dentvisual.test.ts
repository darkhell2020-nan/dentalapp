import { describe, expect, it, beforeEach } from 'vitest';
import { searchTopics } from '../lib/search';
import { topics, getTopicBySlug } from '../data/topics';
import { addRecent, getRecent, toggleFav, getFav, clearRecent, setLang, getLang } from '../lib/storage';

beforeEach(()=>localStorage.clear());
describe('DentVisual MVP',()=>{
 it('home content has all topics',()=>expect(topics.length).toBeGreaterThanOrEqual(16));
 it('search finds crown',()=>expect(searchTopics('crown').some(t=>t.slug==='dental-crown')).toBe(true));
 it('search finds sarung gigi',()=>expect(searchTopics('sarung gigi').some(t=>t.slug==='dental-crown')).toBe(true));
 it('search finds gigi palsu besi',()=>expect(searchTopics('gigi palsu besi').some(t=>t.slug==='chrome-cobalt-denture')).toBe(true));
 it('language preference changes',()=>{setLang('bm');expect(getLang()).toBe('bm')});
 it('favourite can be added and removed',()=>{toggleFav('dental-crown');expect(getFav()).toContain('dental-crown');toggleFav('dental-crown');expect(getFav()).not.toContain('dental-crown')});
 it('recent topic is recorded',()=>{addRecent('dental-crown');expect(getRecent()[0]).toBe('dental-crown');clearRecent();expect(getRecent()).toEqual([])});
 it('topic detail page data renders cards',()=>expect(getTopicBySlug('dental-crown')!.cards.length).toBeGreaterThanOrEqual(3));
 it('presentation mode data exists for open and close controls',()=>expect(getTopicBySlug('chrome-cobalt-denture')!.cards.some(c=>c.type==='comparison')).toBe(true));
 it('missing topic supports not-found routing',()=>expect(getTopicBySlug('missing')).toBeUndefined());
});
