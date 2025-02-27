export interface LevelData {
	id: number;
	name: string;
	description: string;
	position: { x: number; y: number };
	progress: 'passed' | 'current' | 'not passed';
}

export const levelsData: LevelData[] = [
	{
		id: 1,
		name: 'Level 1',
		description: 'This is the first level.',
		position: { x: 15, y: 20 },
		progress: 'passed',
	},
	{
		id: 2,
		name: 'Level 2',
		description: 'This is the second level.',
		position: { x: 25, y: 49 },
		progress: 'passed',
	},
	{
		id: 3,
		name: 'Level 3',
		description: 'This is the third level.',
		position: { x: 31, y: 85 },
		progress: 'current',
	},
	{
		id: 4,
		name: 'Level 4',
		description: 'This is the fourth level.',
		position: { x: 52, y: 53 },
		progress: 'not passed',
	},
	{
		id: 5,
		name: 'Level 5',
		description: 'This is the fifth level.',
		position: { x: 68, y: 60 },
		progress: 'not passed',
	},
	{
		id: 6,
		name: 'Level 6',
		description: 'This is the sixth level.',
		position: { x: 78, y: 20 },
		progress: 'not passed',
	},
];
