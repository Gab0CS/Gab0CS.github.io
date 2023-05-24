import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo = [{
  title: 'Project 1',
  description: 'Description about the project'
},{
  title: 'Project 2',
  description: 'Description about the project'
},{
  title: 'Project 3',
  description: 'Description about the project'
}];
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
        {projects.map((project) => (
          <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree title >{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i) =>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>                  
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit} target='blank'>Git hub repository</ExternalLinks>
              {project.id !== 0 && <ExternalLinks href={project.source} target='blank'>Visit the site</ExternalLinks>}
            </UtilityList>
          </BlogCard>
          ))}
    </GridContainer>
  </Section>
);

export default Projects;
